import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
class Header extends Component {
    render(){
        return (
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="/">Feedbackk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/auth/google">Login with Google</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;