const { emailActions } = require('../constants');

module.exports = {
  [emailActions.WELCOME]: {
    templateName: 'welcome',
    subject: 'Greetings'
  },

  [emailActions.ACCOUNT_CHANGED]: {
    templateName: 'updateAccount',
    subject: 'Your account was changed'
  },

  [emailActions.ACCOUNT_DELETED]: {
    templateName: 'deleteAccount',
    subject: 'Your account was deleted'
  },

  [emailActions.ACCOUNT_CREATED]: {
    templateName: 'createAccount',
    subject: 'Your account was created'
  }
};
