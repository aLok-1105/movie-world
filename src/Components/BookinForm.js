// BookingForm.js
import React, { useState } from 'react';
import '../style/bookingForm.css'

const BookingForm = ({ movieName, form  }) => {
  const [formData, setFormData] = useState({
    movieName: movieName,
    name: '',
    email: '',
    contactNumber: '',
    address: '',
    numberOfTickets: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ movieName: movieName,
        name: '',
        email: '',
        contactNumber: '',
        address: '',
        numberOfTickets: 1,})
    alert("Booking Confirmed");
    console.log('Form submitted:', formData);
  };


  return (
    <div className='container'>
      <div className = "close">
        <span className='close-span' onClick={()=>{form(false)}}>X</span>
      </div>
        <h2 className='heading'>Book Ticket</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label className='label head'>
          Movie Name: {movieName}
        </label>
        <label className='label'>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className='input' required />
        </label>
        <label className='label'>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} className='input' required />
        </label>
        <label className='label'>
          Contact Number:
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className='input' required />
        </label>
        <label className='label'>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} className='input' required />
        </label>
        <label className='label'>
          Number of Tickets:
          <input
            type="number"
            name="numberOfTickets"
            value={formData.numberOfTickets}
            onChange={handleChange}
            min="1"
            className='input'
            required
          />
        </label>
        <button type="submit" className='button'>Book Now</button>
      </form>
    </div>
  );
};



export default BookingForm;
