import React, { Component } from 'react';
import {NewsLetterForm} from '../../components/forms'

class Contact extends Component {
  constructor() {
    super();
    this.state={
      email:'',
      firstName:'',
      lastName: ''
    }
    this.submit = this.submit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }
  submit(e) {
    e.preventDefault()
    console.log('this is the state', this.state);
    fetch('/mailchimp/newsLetter', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(() => {
      console.log('success sent');
    })
    .catch((err) => {
      console.log('failed sending');
    })
  }
  handleEmail(e) {
    console.log('handleEmail', e.target.value);
    this.setState({ email: e.target.value})

  }
  handleFirstName(e) {
    this.setState({ firstName: e.target.value})
  }
  handleLastName(e) {
    this.setState({ lastName: e.target.value})

  }
  render() {
    return (
      <div>
        <p>
          hello this is our contact page.
        </p>
        <NewsLetterForm
          handleSubmit={this.submit}
          handleEmail={this.handleEmail}
          handleFirstName={this.handleFirstName}
          handleLastName={this.handleLastName}
        />
      </div>

    );
  }
}

export default Contact;
