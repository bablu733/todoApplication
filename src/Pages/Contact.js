import React from 'react';
import { Navbar } from 'reactstrap';

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Navbar>
        <div className="container">
          <div className="navbar-menu">
            <a className="navbar-brand" href="/">
              Home
            </a>
          </div>
          <div className="navbar-menu">
            <a className="navbar-brand" href="/about">
              About
            </a>
          </div>
          <div className="navbar-menu">
            <a className="navbar-brand" href="/contact">
              Contact
            </a>
          </div>
        </div>
      </Navbar>
      <div>Home Page</div>

      <p>Have questions, suggestions, or feedback? Feel free to get in touch with us!</p>
      <p>Email: info@example.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Main Street, Cityville, Country</p>
    </div>
  );
};

export default Contact;
