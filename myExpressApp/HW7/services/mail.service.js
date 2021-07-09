const EmailTemplates = require('email-templates');
const nodemailer = require('nodemailer');
const path = require('path');
const { errorMessages, ErrorHandler } = require('../errors');
const { responseCodesEnum } = require('../constants');
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
    throw new ErrorHandler(
      responseCodesEnum.WRONG_TEMPLATE,
      errorMessages.WRONG_TEMPLATE.message,
      errorMessages.WRONG_TEMPLATE.code
    );
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
