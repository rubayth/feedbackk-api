import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:  return;
            case false: return <Nav.Link href="/auth/google">Login with Google</Nav.Link>
            default:    return <Nav.Link href="/api/logout">Logout</Nav.Link>
        }
    }
    render(){
        return (
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand>
                    <Link
                        style={{textDecoration:'none', color:'white'}}
                        to={this.props.auth ? './surveys' : '/'} 
                    > 
                    Feedbackk
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {this.renderContent()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}
export default connect(mapStateToProps)(Header);