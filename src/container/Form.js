import React, { useState } from 'react';
import Form from '../components/Form';

const FormPage = () => {
  const [formStatus, setFormStatus] = useState(false);

  return (
    <div id='Form'>
      <Form setFormStatus={setFormStatus}></Form>
      {formStatus ? <p>Form Done</p> : <p>Please fill in form</p>}
    </div>
  );
};
export default FormPage;
