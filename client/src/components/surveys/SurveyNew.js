import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import {reduxForm} from 'redux-form'
import SurveyReview from './Surveyreview';

class SurveyNew extends Component {

   state={showReview:false}

    renderContent(){
        if(this.state.showReview){
            return <SurveyReview 
            onCancel={() => this.setState({showReview:false})}
            />
        }

        return <SurveyForm onSurveySubmit = {()=>this.setState({showReview:true})}/>
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default reduxForm({
    form:'surveyForm'//to clear form values when navigating away form the compoenent 
})(SurveyNew);