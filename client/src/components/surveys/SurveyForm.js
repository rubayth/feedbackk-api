import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { Form, Button } from 'react-bootstrap';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import SurveyTextArea from './SurveyTextArea';
import validateEmails from '../../utils/validateEmails';


class SurveyForm extends Component{
    constructor() {
        super();
        this.state = {
            code: ""
        }
    }

    renderFields(){
        return(
            <div>
                <Field label="Survey Title" type='text' name='title' component={SurveyField}/>
                <Field label="Subject Line" type='text' name='subject' component={SurveyField}/>
                <Field label="Recipients List" type='text' name='recipients' component={SurveyField}/>
                <Field label="Body" type='text' name='body' component={SurveyTextArea}/>
            </div>
        )
    }
    render() {
        return(
            <div>
                <Form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Button className="" variant='danger'>
                        <Link to="/surveys">Cancel</Link>
                    </Button>
                    <Button className="float-right" type="submit">Next</Button>
                </Form>
                    
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {};
    const { title, body, subject, recipients } = values;
    if (!title) {
        errors.title = 'You must provide a title.'
    }
    if (!subject) {
        errors.subject = 'You must provide a subject.'
    }
    if (!body) {
        errors.body = 'You must provide a body.'
    }
    errors.recipients=validateEmails(recipients || '');

    if (!recipients) {
        errors.recipients = 'You must provide recipients.'
    }
    
    
    return errors;
}

/*
const mapStateToProps = (state)=> {
    return{
        initialValues: {

           code: code
        } 
    }
}
*/

export default (reduxForm({
    validate,
    form: 'surveyForm',
    enableReinitialize: true,
    destroyOnUnmount: false
})(SurveyForm));
