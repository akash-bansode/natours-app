const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter

  // If we want to use GMAIL
  // const transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {
  //         user: process.env.EMAIL_USERNAME,
  //         pass: process.env.EMAIL_PASSWORD
  //     }
  //     // Activate in gmail 'less secure app' option
  // })

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the mail options
  const mailOptions = {
    form: 'Akash Bansode <akash.b@prometteur.in>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    // html
  };

  // 3) Actually send the mail
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;