import React from 'react';
import { Form } from 'react-bootstrap';

const SurveyField = ( {input, label, meta: {error, touched}}) => {
    return(
        <div>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control {...input}/>
                <Form.Text className="text-danger">
                    {touched && error}
                </Form.Text>
            </Form.Group>
        </div>
    )
}

export default SurveyField;