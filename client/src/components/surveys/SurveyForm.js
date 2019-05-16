import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { Form, Button } from 'react-bootstrap';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
class SurveyForm extends Component{
    renderFields(){
        return(
            <div>
                <Field label="Survey Title" type='text' name='title' component={SurveyField}/>
                <Field label="Subject Line" type='text' name='subject' component={SurveyField}/>
                <Field label="Email Body" type='text' name='email' component={SurveyField}/>
                <Field label="Recipients List" type='text' name='emails' component={SurveyField}/>
            </div>
        )
    }

    render() {
        return(
            <div>
                <Form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Button className="" variant='danger'>
                        <Link to="surveys">Cancel</Link>
                    </Button>
                    <Button className="float-right" type="submit">Next</Button>
                </Form>
                    
            </div>
        )
    }
}

const validate = (values) => {
    const errors = {};

    if (!values.title) {
        errors.title = 'You must provide a title.'
    }
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
})(SurveyForm);