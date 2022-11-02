const nodemailer = require("nodemailer")
const config = require('../config/database')

//per settare le variabili di configurazione dell'email si utilizza SENDGRID

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: config.EMAIL_SERVICE,
    auth: {
      user: config.EMAIL_USERNAME,
      pass: config.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: config.EMAIL_FROM,
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;