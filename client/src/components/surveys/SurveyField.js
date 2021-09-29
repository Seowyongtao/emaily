//Survey field contains logic to render a single label and text input
import React from "react";
import "./SurveyField.css"

// eslint-disable-next-line
export default ({input, label, meta:{error,touched}}) => {
  return (
    <div className="survey-field">
      <label className="black-text label-text">{label}</label>
      <input {...input} style={{marginBottom:"5px"}}/>
      <div className="red-text" style={{marginBottom:"20px"}}>
        {touched && error}
      </div>
    </div>
  );
};
