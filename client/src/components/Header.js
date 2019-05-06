import React, { Component } from 'react';
import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    dropdown() {
        return (
            <NavDropdown 
            alignRight
            title={this.props.auth.userName || 'Profile'}  
            id="nav-dropdown"
            >
                <NavDropdown.Item>Action</NavDropdown.Item>
                <NavDropdown.Item>Another action</NavDropdown.Item>
                <NavDropdown.Item>Something else here</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='/api/logout'>Logout</NavDropdown.Item>
            </NavDropdown>
        )
    }
    renderContent() {
        switch (this.props.auth) {
            case null:  return;
            case false: return <Nav.Link href="/auth/google">Login with Google</Nav.Link>
            default:    return this.dropdown()
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