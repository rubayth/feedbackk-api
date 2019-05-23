import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import SurveyTemplate from './SurveyTemplate';

class SurveyNew extends Component{
    state = { 
        stage:0
    };

    renderContent() {
        switch (this.state.stage) {
            case 0:
                return (<SurveyTemplate onTemplateSubmit={() => this.setState({stage:1})}/>);
            case 1:
                return (<SurveyForm 
                            onSurveySubmit={() => this.setState({ stage:2})}/>);
            case 2:
                return (<SurveyFormReview onCancel={() => this.setState({ stage:1 })}/>);
            default:
                return <SurveyTemplate onTemplateSubmit={() => this.setState({stage:1})}/>
        }
    }
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);