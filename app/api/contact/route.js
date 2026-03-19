export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message, consent } = body || {};

  if (!name || !email || !subject || !message || !consent) {
    return Response.json(
      { message: 'Please complete all fields and provide consent.' },
      { status: 400 }
    );
  }

  return Response.json(
    {
      message:
        'Example only: form payload received. Connect this route to email delivery, validation, spam protection and secure storage before production.'
    },
    { status: 200 }
  );
}
