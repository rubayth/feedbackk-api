import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { Form, Button } from 'react-bootstrap';
import SurveyField from './SurveyField';
import { Link } from 'react-router-dom';
import ReduxAce from './ReduxAce';
import AceEditor from 'react-ace';
import validateEmails from '../../utils/validateEmails';
import "brace/mode/html";
import "brace/theme/monokai";


class SurveyForm extends Component{
    constructor() {
        super();
        this.state = {
            code: ""
        }
    }


    onCodeChange = (code) => {
        this.setState({code})
       // ReactTestUtils.Simulate.click(this.inputElement);
    }

    renderFields(){
        return(
            <div>
                <Field label="Survey Title" type='text' name='title' component={SurveyField}/>
                <Field label="Subject Line" type='text' name='subject' component={SurveyField}/>
                <Field label="Recipients List" type='text' name='emails' component={SurveyField}/>
                <Field label="Email Body" type='text' name='body' content={this.state.code} component={ReduxAce}/>
            </div>
        )
    }
    render() {
        return(
            <div>
                <Form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <AceEditor
                    className="center"
                    mode="html"
                    onChange={this.onCodeChange}
                    value={this.state.code}
                    theme="monokai"
                    editorProps={{ $blockScrolling: true }}
  />
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
    const { title, body , subject, emails } = values;
    if (!title) {
        errors.title = 'You must provide a title.'
    }
    if (!subject) {
        errors.subject = 'You must provide a subject.'
    }
    if (!body) {
        errors.body = 'You must provide a body.'
    }
    errors.emails=validateEmails(emails || '');

    if (!emails) {
        errors.emails = 'You must provide recipients.'
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
