import React from 'react';
import { Navbar } from 'reactstrap';
const About = () => {
  return (
    <div className="about-container">
         <div>
            <Navbar>
                <div className="container">
                    <div className="navbar-menu">
                        <a className="navbar-brand" href="/">Home</a>
                    </div>
                    <div className="navbar-menu">
                        <a className="navbar-brand" href="/about">About</a>
                    </div>
                    <div className="navbar-menu">
                        <a className="navbar-brand" href="/contact">Contact</a>
                    </div>
                </div>
            
            </Navbar>
           
            
        </div>
        
      <h2>About Us</h2>
      <p>
        Welcome to our Todo App! We are dedicated to providing you with a simple and effective tool
        for managing your tasks and staying organized.
      </p>
      <p>
        Our mission is to make your life easier by helping you keep track of your to-do list in a
        convenient way.
      </p>
      <p>
        Feel free to explore our application and start creating your tasks. If you have any
        questions or feedback, don't hesitate to reach out to us.
      </p>
    </div>
  );
};

export default About;
