import React from 'react';
import './ContactInfo.css';

const ContactInfo = ({ address, company, email, phone, website }) => {
  return (
    <div className="contact-info">
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>
    </div>
  );
};

export default ContactInfo;