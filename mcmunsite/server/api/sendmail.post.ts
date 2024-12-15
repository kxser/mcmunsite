import nodemailer from 'nodemailer';
import { validateCfToken } from '../utils/validateCfToken';
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { turnstileSecretKey: turnstileSecretKey, mailerMail: mailerMail, mailerPassword: mailerPassword } = useRuntimeConfig(event)
  const { success: captchaValid } = await validateCfToken(body.cfToken, turnstileSecretKey);
  if (!captchaValid) {
      return {
        success: false,
        status: 5001,
        message: 'Captcha Invalid',
      }
  }

  console.log(mailerMail)
  console.log(mailerPassword)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailerMail,
      pass: mailerPassword,
    },
  });

  const content = `
  Name: ${body.nameAndSurname},
  
  Email: ${body.email},

  Subject: ${body.subject},

  Message: ${body.inquiry}
  `

  console.log(content);


  const mailOptions = {
    from: 'mcmuninfotech@gmail.com',
    to: 'secretariatmcmun@gmail.com',
    subject: `WEBSITE OTO MESAJ - ${body.subject}`,
    text: content,
  };

  await transporter.sendMail(mailOptions);

  return { success: true, message: 'Email sent successfully!' };

});
