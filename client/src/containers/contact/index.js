import React, { Component } from 'react';
import {NewsLetterForm} from '../../components/forms';
import {ModelForm} from '../../components/modelForm';

class Contact extends Component {
  constructor() {
    super();
    this.state={
      email:'',
      firstName:'',
      lastName: ''
    }
    this.submit = this.submit.bind(this);
    this.modelSubmit = this.modelSubmit.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
  }
  submit(e) {
    e.preventDefault()
    console.log('news letter Submit');
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

  modelSubmit(e) {
    e.preventDefault()
    console.log('modelSubmit');
    console.log('this is the state', this.state);
    fetch('/mailchimp/modelSignup', {
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
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12'>
            <h1>Contact Page</h1>
          </div>
        </div>
        <div className="row">
          <div className='col-md-6'>
            <NewsLetterForm
              handleSubmit={this.submit}
              handleEmail={this.handleEmail}
              handleFirstName={this.handleFirstName}
              handleLastName={this.handleLastName}
            />
          </div>

          <div className='col-md-6'>
            <ModelForm
              handleSubmit={this.modelSubmit}
              handleEmail={this.handleEmail}
              handleFirstName={this.handleFirstName}
              handleLastName={this.handleLastName}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
