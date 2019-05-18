import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    return (
        <div>
            <h1>Review</h1>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Recipients</label>
                    <div>{formValues.recipients}</div>
                </div>
                <div>
                    
                    <label>Body</label>
                    <div>{formValues.body}</div>
                </div>
            </div>
            <Button className="" variant='danger' onClick={onCancel}>
                Back
            </Button>
            <Button className="float-right" variant='success' 
                onClick={() => submitSurvey(formValues, history)}type="submit">Send!</Button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));