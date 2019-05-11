const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // { mail } = sendgrid
const keys = require('../config/keys');

class Mailer extends helper.Mail {

}

module.exports = Mailer;