import React from "react";
import formFields from "./formFields";
import { connect } from "react-redux";
import * as actions from "../../actions";
import _ from "lodash";

const Surveyreview = ({ onCancel, formValues, submitSurvey }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please review</h5>
      {reviewFields}
      <button
        onClick={onCancel}
        className="yellow white-text darken-3 btn-flat"
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues)}
        className="green white-text btn-flat right"
      >
        Send Survey<i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(mapStateToProps, actions)(Surveyreview);
