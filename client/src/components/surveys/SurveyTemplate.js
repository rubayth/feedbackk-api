import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; 
import { Form, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SurveyRadio from './fieldComponents/SurveyRadio';



class SurveyTemplate extends Component {
    checkRadio(values){
        if (!values.template){
            alert('You must choose a template');
        }
        else
            this.props.onTemplateSubmit();
    }
    render() {
        return(
            <div >
                <h1 className='text-center'>Choose a template</h1>
                <Form onSubmit={this.props.handleSubmit(values => {this.checkRadio(values)})}>
                    <Row className='justify-content-center'>
                        <Field type='radio' name="template" component={SurveyRadio} value='default'/>
                    </Row>
                    <Button variant='danger'>
                        <Link className='d-block' to="/surveys">Cancel</Link>
                    </Button>
                    <Button className="float-right" type="submit">Next</Button>
                </Form>
            </div>
        )
    }
    
}

export default (reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyTemplate));