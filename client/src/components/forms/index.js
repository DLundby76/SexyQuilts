import React from 'react';
import { styles } from './forms_style'

export const NewsLetterForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1" style={styles.newsLetter.text}>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
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
          id="firstNameInput"
          value={props.firstName}
          onChange={props.handleFirstName}
          placeholder="First Name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">First Name</label>
        <input
          type="text"
          className="form-control"
          id="lastNameInput"
          value={props.lastName}
          onChange={props.handleLastName}
          placeholder="Last Name"/>
      </div>
      <button type="submit" className="btn btn-default">Submit</button>
      </form>
</div>

  );
};

export default NewsLetterForm;
