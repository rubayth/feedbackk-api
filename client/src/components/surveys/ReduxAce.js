import React from 'react';
import { Form } from 'react-bootstrap';

const ReduxAce = ( {input, label, content }) => {
    return(
        <div className="">
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <Form.Control as='textarea' {...input} value={content} />
            </Form.Group>
        </div>
    )
}

export default ReduxAce;