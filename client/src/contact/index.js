import React, { Component } from 'react';

class Contact extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit() {
    fetch('/mailgun/newsLetter', {
      method: 'post',
      body: 'Hello World'
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
        <button onClick={this.submit}>test mailgun</button>
      </div>

    );
  }
}

export default Contact;
