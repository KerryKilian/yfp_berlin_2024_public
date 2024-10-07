// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, telephone, city, mail} = req.body;

    if (!mail) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      // Erstelle einen Nodemailer-Transporter für Web.de
      const transporter = nodemailer.createTransport({
        host: 'smtp.web.de',
        port: 587, // oder 465 für SSL
        secure: false, // Setze auf true, wenn du port 465 verwendest
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      // Konfiguriere die E-Mail
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: mail,
        subject: "Your Subscription / Unsubscription link",
        text: `Hello ${name}\n\nYou subscribed to a tour during the youth for peace 2024 meeting in Berlin.\nYour dates:\n${name}\n${city}\n${telephone}\n\nIf you want to change your tour, you have to unsubscribe from the tour. Please use this link:`
      };
      await transporter.sendMail(mailOptions);


      // Erfolgreiche Antwort zurückgeben
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
