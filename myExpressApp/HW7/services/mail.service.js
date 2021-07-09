const EmailTemplates = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');

const { constants: { SYSTEMS_EMAIL, SYSTEMS_EMAIL_PASSWORD } } = require('../constants');
const templateInfo = require('../email-templates');

const templateParser = new EmailTemplates({
  views: {
    root: path.join(process.cwd(), 'email-templates')
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SYSTEMS_EMAIL,
    pass: SYSTEMS_EMAIL_PASSWORD
  }
});

const sendMail = async (userMail, action, context = {}) => {
  const temlapteToSend = templateInfo[action];

  if (!temlapteToSend) {
    throw new Error('Wrong template');
  }

  const html = await templateParser.render(temlapteToSend.templateName, context);

  return transporter.sendMail({

    from: 'Sender',
    to: userMail,
    subject: temlapteToSend.subject,
    html
  });
};

module.exports = { sendMail };
