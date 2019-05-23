import React from 'react';
import defaultTemplate from './defaultTemplate.PNG';

const SurveyRadio = ( {input, value, name, ...rest} ) => {
    return(
        <label style={{margin: '10px 10px'}}>
                    <input {...input} type='radio' name='template'/>
                    <img alt='default' src={defaultTemplate} style={{height:'20rem'}}/>
        </label>
    )
}

export default SurveyRadio;