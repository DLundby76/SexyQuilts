import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit() {
    fetch('/mailchimp/newsLetter', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({name: 'tina', email: 'dlundby@hotmail.com'})
    }).then(() => {
      console.log('success sent');
    })
    .catch((err) => {
      console.log('failed sending');
    })
  }
  render() {
    return (
      <div>
        <p>
          hello this is our contact page.
        </p>
        <button onClick={this.submit}>test mailchimp</button>
      </div>

    );
  }
}

export default Contact;
