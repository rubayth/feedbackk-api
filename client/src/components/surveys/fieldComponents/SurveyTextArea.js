import React from 'react';
import { Form } from 'react-bootstrap';

const SurveyTextArea = ( {input, label, content, meta: {error, touched} }) => {
    return(
        <div className="">
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control as='textarea' {...input} placeholder={content} />
                <Form.Text className="text-danger">
                    {touched && error}
                </Form.Text>
            </Form.Group>
        </div>
    )
}

export default SurveyTextArea;