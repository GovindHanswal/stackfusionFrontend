import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const UserForm = () => {
  const navigate= useNavigate();
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Perform form validation here
  
    // Create an object with the form data
    const formData = {
      name,
      dob,
      email,
      phone
    };
  
    try {
      // POST request to the Django backend API
      const response = await axios.post('http://127.0.0.1:8000/api/submit-form/', formData);
      // Handle the success response, display success message, etc.
      console.log(response.data);
    //   Success message
      window.alert('Check your mail that you have given')
    // Redirecting it to the page where all the forms list will be displayed
      navigate('/submitted-form')


    } catch (error) {
      console.error(error);
      // Handle the error response, display error message, etc.
    }
  
    // Reset form fields
    setName('');
    setDob('');
    setEmail('');
    setPhone('');
  };
  

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(event) => setDob(event.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
