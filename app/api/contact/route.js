import { contactTopics, siteConfig } from '../../../content/siteContent';

const LIMITS = { topic: 20, name: 100, email: 254, subject: 150, message: 5000 };

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: 'The form could not be read. Please try again.' }, { status: 400 });
  }

  const { name, email, subject, message, consent, website } = body || {};

  // Honeypot field: real visitors never see or fill it in
  if (website) {
    return Response.json({ delivered: false }, { status: 200 });
  }

  if (!name || !email || !subject || !message || !consent) {
    return Response.json({ message: 'Please complete all fields and give consent.' }, { status: 400 });
  }

  for (const [field, max] of Object.entries(LIMITS)) {
    if (String(body[field]).length > max) {
      return Response.json({ message: `Your ${field} must be ${max} characters or fewer.` }, { status: 400 });
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return Response.json({ message: 'Enter an email address in the correct format.' }, { status: 400 });
  }

  // Email delivery is switched on by setting these in the hosting environment.
  // Without them the form asks the visitor to email the church directly.
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return Response.json({ delivered: false }, { status: 200 });
  }

  const topicLabel = contactTopics.find((item) => item.value === body.topic)?.label || 'Not given';
  const text = [
    `New message from the ${siteConfig.name} website`,
    '',
    `Topic: ${topicLabel}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || `${siteConfig.name} website <onboarding@resend.dev>`,
        to: to.split(',').map((address) => address.trim()),
        reply_to: email,
        subject: `Website message: ${subject}`,
        text
      })
    });
    if (!response.ok) {
      console.error('Resend error', response.status, await response.text());
      throw new Error('Email provider rejected the message');
    }
  } catch (error) {
    console.error('Contact form delivery failed', error);
    return Response.json(
      { message: `Please try again, or email us at ${siteConfig.email}.` },
      { status: 502 }
    );
  }

  return Response.json({ delivered: true }, { status: 200 });
}
