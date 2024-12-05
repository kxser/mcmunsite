import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mcmuninfotech@gmail.com',
      pass: 'vldjsxdpfpvuiidl',
    },
  });

  const mailOptions = {
    from: 'mcmuninfotech@gmail.com',
    to: body.sendTo,
    subject: `WEBSITE OTO MESAJ - ${body.subject}`,
    text: body.content,
  };

  await transporter.sendMail(mailOptions);

  return { status: 200, message: 'Email sent successfully!' };
});
