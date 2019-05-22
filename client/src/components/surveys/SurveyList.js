import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class SurveyList extends Component{

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <Card key={survey._id} style={{ }}>
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


export default SurveyList;