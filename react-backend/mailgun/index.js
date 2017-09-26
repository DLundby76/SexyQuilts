const mailgun = require('mailgun-js')({domain:'sandboxf89729470f2f447e8dd663fd7115d50c.mailgun.org', apiKey:'key-6fa0f5e158348688326ba7e2205dbe10'});
const newsLetterList = 'newsletter@sandboxf89729470f2f447e8dd663fd7115d50c.mailgun.org'
const list = mailgun.lists(newsLetterList)


module.exports = () => {
function newsLetterSignup(formData) {
  const { name, email } = formData;
  const subscriber = {
    subscribed: true,
    address: email,
    name: name,

  }
  list.members().create(subscriber,(err, data) => {
    if (err){
      console.error('failed to add member to newsletter');
    }
    console.log('success', data);
  })

}
function modelSignup(formData) {

}
return {
  newsLetterSignup
}
}
