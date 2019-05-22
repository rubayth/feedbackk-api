import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends React.Component {
    render(){
        return (
            <section className='full-width landing'>
                <Jumbotron className = 'title my-dark'>
                    <h1>You need feedback from your users.</h1>
                    <h1>Now what?</h1>

                    {this.props.auth === false
                    ? 
                        <Button variant='info' style={{width:'10rem'}} href='/auth/google'
                            > Login with Google
                        </Button>
                    : 
                        <Button variant='info' style={{width:'10rem'}}>
                            <Link to='/surveys'>Dashboard</Link>
                        </Button>
                    }
                </Jumbotron>
    
            </section>
        ); 
    }
    
};

function mapStateToProps({ auth }) {
    return { auth: auth };
}
export default connect(mapStateToProps)(Landing);