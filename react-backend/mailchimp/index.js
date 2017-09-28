const MailChimp = require('mailchimp-api-v3');
const mailChimp = new MailChimp('569274f06dd8af2c9e17ef59a356c6ed-us16')


module.exports = (function() {
function newsLetterSignup(formData) {
  const { name, email } = formData;
  const subscriber = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME: name,
    }

  }
  return mailChimp.post('/lists/32f622ac8e/members', subscriber);

}
function modelSignup(formData) {

}
return {
  newsLetterSignup
}
}())
