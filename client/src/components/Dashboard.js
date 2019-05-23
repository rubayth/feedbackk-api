import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron } from 'react-bootstrap';

import SurveyList from './surveys/SurveyList';
import { connect } from 'react-redux';
import { fetchSurveys } from '../actions';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderContent() {
        switch(!this.props.surveys.isPending && this.props.surveys.surveys.length===0) {
            case null: return;
            case true: return (
                <Jumbotron className = 'title'>
                    <h1>Create your first campaign</h1>
                    <p>Campaigns are emails you share with your recipients.</p>
                    <Button variant='info' style={{width:'10rem'}}
                        > <Link className='d-block' to="/surveys/new">Create a campaign</Link>
                    </Button>
                </Jumbotron>
                );
            default: return (
                <SurveyList surveys={this.props.surveys}/>
            );
        }
        
    }
    render() {
        return (
            <div>
                {this.renderContent()}

                <Button variant="info" 
                    style={{
                        padding: "0px",
                        position: "fixed",
                        right: "23px",
                        bottom: "23px",
                        borderRadius:"50%",
                        width:"80px",
                        height:"80px",
                        fontSize:"2rem",
                    }}
                    >
                    <Link style={{display: 'block',}}
                        to="/surveys/new">+</Link>
                </Button>
            </div>
        )
    }
    
}

function mapStateToProps({ surveys }) {
    return {surveys};
}
export default connect(mapStateToProps, { fetchSurveys })(Dashboard)