import React, {Component} from "react";
import {connect} from "react-redux";
import { fetchSurveys } from "../../actions";
import "./SurveyList.css"

class SurveyList extends Component {

  componentDidMount(){
    this.props.fetchSurveys();
  }

  renderSurveys(){
    return this.props.surveys.reverse().map(survey =>{
      return(
          <div className="card darken-1 survey-info-card" key={survey._id}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <br></br>
              <p>
                {survey.body}
              </p>
              <br></br><br></br>
              <p className="right">
                Sent On: {new Date(survey.dateSent).toLocaleDateString()}
              </p>
            </div>
            <div className="card-action">
              <a>Yes: {survey.yes}</a>
              <a>No: {survey.no}</a>
            </div>
          </div>
      );
    });
  }

  render(){
    return(
      <div>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }){
  return {surveys};
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
