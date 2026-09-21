export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const name = String(body.name || '').trim();
    const email = String(body.email || '').trim();
    const projectType = String(body.projectType || '').trim();
    const message = String(body.message || '').trim();

    // Spam honeypot: bots rellenan un campo invisible.
    if (body.website && String(body.website).length > 0) {
      return Response.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return Response.json({ success: false, error: 'Campos incompletos.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      return Response.json({ success: false, error: 'Email inválido.' }, { status: 400 });
    }
    if (message.length > 4000 || name.length > 120 || email.length > 254) {
      return Response.json({ success: false, error: 'Mensaje demasiado largo.' }, { status: 400 });
    }

    const apiKey = env.MAILCHANNELS_API_KEY;
    const toEmail = env.TO_EMAIL;
    const fromEmail = env.FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      return Response.json(
        { success: false, error: 'Form no configurado todavía.' },
        { status: 500 }
      );
    }

    const mailRes = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: toEmail, name: 'Miguel Angel Cabrera' }] }],
        from: { email: fromEmail, name: 'Sitio web MAC' },
        replyTo: { email, name },
        subject: `Contacto desde la landing — ${projectType || 'consulta'}`,
        content: [
          { type: 'text/plain', value: buildMailText({ name, email, projectType, message }) },
        ],
      }),
    });

    if (!mailRes.ok) {
      const detail = await mailRes.text();
      console.error('MailChannels error', mailRes.status, detail);
      return Response.json({ success: false, error: 'Envío falló.' }, { status: 502 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (_err) {
    console.error(_err);
    return Response.json({ success: false, error: 'Envío falló.' }, { status: 500 });
  }
}

function buildMailText({ name, email, projectType, message }) {
  return [
    'Nuevo mensaje desde la landing de MAC — Miguel Angel Cabrera',
    '',
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Tipo de proyecto: ${projectType || 'Sin especificar'}`,
    '',
    'Mensaje:',
    message,
    '',
  ].join('\n');
}