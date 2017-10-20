import React from 'react';
// import { styles } from '../forms/forms_style'
import { styles } from './model_form.css'

export const ModelForm = (props) => {
  return (
    <div className='model id=model_form'>
      <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="modelemail"
          value={props.email}
          onChange={props.handleEmail}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">First Name</label>
        <input
          type="text"
          className="form-control"
          id="modelFirstName"
          value={props.firstName}
          onChange={props.handleFirstName}
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Last Name</label>
        <input
          type="text"
          className="form-control"
          id="modelLastName"
          value={props.lastName}
          onChange={props.handleLastName}
          placeholder="Last Name"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
      </form>
</div>

  );
};

export default ModelForm;
