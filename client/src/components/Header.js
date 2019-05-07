import React, { Component } from 'react';
import { Navbar, Nav , NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    dropdown() {
        return (
            <NavDropdown
            alignRight
            title={
                <div style={{display:'inline-block'}}>
                    <img className="profilePic" 
                        src={this.props.auth.profilePic} 
                        alt="user pic"
                    />
                    {" " + this.props.auth.userName}
                </div>
            }  
            id="collasible-nav-dropdown"
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
            case false: 
                return (
                    <Nav className="ml-auto">
                        <Nav.Link href="/auth/google">Login with Google</Nav.Link>
                    </Nav>
                )
            default:    
                return (
                    <Nav className="ml-auto">
                        <Nav.Item style={{paddingTop:'0.4rem'}}><Payments/></Nav.Item>
                        {this.dropdown()}
                    </Nav>
                )
        }
    }
    render(){
        return (
            <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                <Navbar.Brand>
                    <Link
                        style={{textDecoration:'none', color:'white'}}
                        to={this.props.auth ? './surveys' : '/'} 
                    > 
                    Feedbackk
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {this.renderContent()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}
export default connect(mapStateToProps)(Header);