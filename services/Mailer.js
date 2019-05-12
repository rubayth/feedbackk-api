const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // { mail } = sendgrid
const keys = require('../config/keys');

class Mailer extends helper.Mail {
    constructor({ subject, recipients }, content) {
        super();

        this.from_email = new helper.Email('no-reply@feedbackk.com');
        this.subject = subject;
        this.body = new helper.Content('text/html', content);
        this.recipients = this.formatAddresses(recipients);

        this.addContent(this.body);
        this.addClickTracking();
        this.addRecipients();
    }

    formatAddresses(reciepents) {
        return recipients.map(({ email }) => {
            return new helper.Email(email);
        })
    }

    addClickTracking() {
        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true, true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);
    }

    addRecipients() {
        const personalize = new helper.Personalization();
        this.recipients.forEach(reciepents => {
            personalize.addTo(reciepents);
        });
        this.addPersonalization(personalize);
    }
}

module.exports = Mailer;