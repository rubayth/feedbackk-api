import React, { Component } from 'react';
import { Navbar, Nav , NavDropdown, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import logo from '../assets/feedbackkLogo.png'
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
    renderRightNav() {
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
                        <Nav.Item style={{margin:'0.4rem'}}>
                            <Payments/>
                        </Nav.Item>
                        <Nav.Item style={{margin:'0.4rem'}}>
                            <Button variant='info'>Credits: {this.props.auth.credits}</Button>
                        </Nav.Item>
                        {this.dropdown()}
                    </Nav>
                )
        }
    }
    
    renderLeftNav() {
        switch (this.props.auth) {
            case null:  return;
            case false: 
                return ;
            default:    
                return (
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <Link to='/surveys'>Dashboard</Link>
                        </Nav.Item>
                    </Nav>
                )
        }
    }
    render(){
        return (
            <Navbar style={{}} className='' collapseOnSelect bg="dark" expand="lg" variant="dark">
                <Navbar.Brand>
                    <Link
                        style={{textDecoration:'none', color:'white'}}
                        to='/' 
                    > 
                    <img src={logo}
                        width="90"
                        height="auto"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {this.renderLeftNav()}
                    {this.renderRightNav()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth: auth };
}
export default connect(mapStateToProps)(Header);