const nodemailer = require('nodemailer');
const { constants: { SYSTEMS_EMAIL, SYSTEMS_EMAIL_PASSWORD } } = require('../constants');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SYSTEMS_EMAIL,
    pass: SYSTEMS_EMAIL_PASSWORD
  }
});

const sendMail = async (userMail) => {
  await transporter.sendMail({

    from: 'Sender',
    to: userMail,
    subject: 'Hi there',
    html: '<div> Hi </div>'
  });
};

module.exports = { sendMail };
