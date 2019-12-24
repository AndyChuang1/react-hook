import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = props => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    props.setFormStatus(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name='email'
        type='text'
        onChange={e => {
          setEmail(e.target.value);
        }}
        value={email}
      ></input>
      <input
        name='pwd'
        type='password'
        onChange={e => {
          setPwd(e.target.value);
        }}
        value={pwd}
      ></input>
      <input type='submit' value='submit'></input>
    </form>
  );
};

Form.propTypes = {
  formStatus: PropTypes.bool,
};

export default Form;
