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
    if (!name || !dob || !email || !phone) {
      // Handle form validation error, display error message, etc.
      window.alert('Please fill in all fields');
      return;
    }
  
   
  
    // Age validation
    const currentDate = new Date();
    const inputDate = new Date(dob);
    const ageInYears = Math.floor((currentDate - inputDate) / (1000 * 60 * 60 * 24 * 365));
    if (ageInYears < 18) {
      // Handle age validation error, display error message, etc.
      window.alert('You must be at least 18 years old');
      return;
    }
  
    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      // Handle phone number validation error, display error message, etc.
      window.alert('Please enter a valid 10-digit phone number');
      return;
    }
    // Create an object with the form data
    const formData = {
      name,
      dob,
      email,
      phone
    };
  
    try {
      // POST request to the Django backend API
      const response = await axios.post('https://govindhanswal.pythonanywhere.com/api/submit-form/', formData);
      // Handle the success response, display success message, etc.
      console.log(response.data);
    //   Success message
      window.alert('Please check your Email inbox for mail')
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
    <div className="user-form-container"> {/* Add a container class */}
    <h2 className="form-title">User Form</h2> {/* Add a title class */}
    <form className="form" onSubmit={handleSubmit}> {/* Add a form class */}
      <div className="form-field"> {/* Add a field class */}
        <label className="form-label">Name:</label> {/* Add a label class */}
        <input className="form-input" type="text" value={name} onChange={(event) => setName(event.target.value)} /> {/* Add an input class */}
      </div>
      <div className="form-field">
        <label className="form-label">Date of Birth:</label>
        <input className="form-input" type="date" value={dob} onChange={(event) => setDob(event.target.value)} />
      </div>
      <div className="form-field">
        <label className="form-label">Email:</label>
        <input className="form-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="form-field">
        <label className="form-label">Phone:</label>
          <input className="form-input" type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        </div>
        <button className="submit-button" type="submit">Submit</button> {/* Add a button class */}
      </form>
    </div>
  );
};


export default UserForm;
