import nodemailer from 'nodemailer';
import { validateCfToken } from '../utils/validateCfToken';
import { transformString } from '../utils/transformString';
export default defineEventHandler(async (event) => { 
  try {

 
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

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailerMail,
      pass: mailerPassword,
    },
  });

  const content = `
  Name: ${transformString(body.nameAndSurname, ['escapeJs', 'escapeBash'], 256)},
  
  Email: ${transformString(body.email, ['escapeJs', 'escapeBash'], 256)},

  Subject: ${transformString(body.subject, ['escapeJs', 'escapeBash'], 512)},

  Message: 
  
  ${transformString(body.inquiry, ['escapeJs', 'escapeBash'], 5096)}
  `

  console.log(content);


  const mailOptions = {
    from: 'mcmuninfotech@gmail.com',
    to: 'secretariatmcmun@gmail.com',
    subject: `WEBSITE OTO MESAJ - ${body.subject}`,
    text: content,
  };

  await transporter.sendMail(mailOptions);

  return { success: true, message: 'Email sent successfully.' };
} catch (error) {
  console.log(`Error while sending mail request: ${error}, ${async () => (await readBody(event))}`);
  return { success: false, status: 5002, message: 'Error while sending mail request.' };
}
});
