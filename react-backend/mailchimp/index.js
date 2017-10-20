const MailChimp = require('mailchimp-api-v3');
const mailChimp = new MailChimp(process.env.MAIL_CHIMP_API)


module.exports = (function() {

  function newsLetterSignup(formData) {
    const { firstName, lastName, email } = formData;
    const subscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }

    return mailChimp.post('/lists/32f622ac8e/members', subscriber);
  }

  function modelSignup(formData) {
    const { firstName, lastName, email } = formData;
    const subscriber = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }

    return mailChimp.post('/lists/2e931ded97/members', subscriber);
  }
  return {
    newsLetterSignup: newsLetterSignup,
    modelSignup: modelSignup
  }
}())
