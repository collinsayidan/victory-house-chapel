const LIMITS = { name: 100, email: 254, subject: 150, message: 5000 };

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

  // TODO: send the message with an email service (for example Resend, Postmark or
  // Formspree) and return `delivered: true` once it has been sent.
  return Response.json({ delivered: false }, { status: 200 });
}
