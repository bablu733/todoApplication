import React from 'react';
import { Navbar } from 'reactstrap';
function Home(props) {
    return (
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
    );
}

export default Home;