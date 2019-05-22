import React, { Component } from 'react';
import { fetchSurveys } from '../../actions';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class SurveyList extends Component{
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <Card style={{ }}>
                    <Card.Body>
                        <Card.Title>{survey.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Sent: {new Date(survey.dateSent).toLocaleDateString()}</Card.Subtitle>
                        <Card.Text>
                        {survey.body}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Card.Link>Yes: {survey.yes}</Card.Link>
                    <Card.Link>No: {survey.no}</Card.Link>
                </Card.Body>
                </Card>
            )
        })
    }
    render() {
        return(
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

function mapStateToProps({ surveys }) {
    return {surveys};
}
export default connect(mapStateToProps, { fetchSurveys })(SurveyList)