import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import "./SurveyFormReview.css"

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

  const reviewFields = _.map(formFields,({name,label}) => {
    return(
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

  return (
    <div className="survey-form-review-container">
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button className="yellow darken-3 btn-flat button" onClick={onCancel}>
      Back
      </button>
      <button onClick={() => submitSurvey(formValues, history)} className="green white-text btn-flat right button">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state){

  return{
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
