import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

function NavBar(props) {
    return (
        <Navbar expand="lg">

           <h2 
              className="ml-5 pracify" 
              onClick={() => props.history.push('/')}>pracify.</h2>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ml-auto mr-5">
              <button className="mx-2 partner_button" onClick={() => props.history.push('/partner')}>Partner</button>
              <button className="mx-2 download_button" >Download App</button>
              <button className="mx-2 company_button" >I'm a Company</button>
            </Nav>

            </Navbar.Collapse>

        </Navbar>
    );
}

export default withRouter(NavBar);