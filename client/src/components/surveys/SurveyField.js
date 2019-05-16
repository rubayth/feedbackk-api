import React from 'react';
import { Form } from 'react-bootstrap';

const SurveyField = ( {input, label }) => {
    return(
        <div>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control {...input}/>
            </Form.Group>
        </div>
    )
}

export default SurveyField;