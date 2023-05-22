import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SubmittedForm = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    axios.get('https://govindhanswal.pythonanywhere.com//api/submitted-forms/')
      .then((response) => {
        setForms((response.data));
        console.log(response.data)
      })
      .catch((error) => {
        console.error('Error retrieving forms:', error);
      });
  }, []);
  
  return (
    <div>
    <h1>Submitted Forms</h1>
    <ol>
      {forms.map((form, index) => (
        <li key={index}>
          <p><strong>Name:</strong> {form.name}</p>
          <p><strong>Date of Birth:</strong> {form.dob}</p>
          <p><strong>Email:</strong> {form.email}</p>
          <p><strong>Phone:</strong> {form.phone}</p>
        </li>
      ))}
    </ol>
  </div>
  );
};

export default SubmittedForm;