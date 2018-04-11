import React, { Component } from 'react'
import SubHeader from './SubHeader'
import SubmitButton from './SubmitButton';
import Story from './Story';

class ResultsPage extends Component {
  constructor(){
    super()
  }

  decider (){
    if(this.props.storyState === true) {
      return 'Story';
    } else return 'ResultsPage';
  };


  render(){


    const Views = {
      ResultsPage: (
        <div>
          <SubHeader
            subHeader={"Nice one, your score is " + this.props.score}/>
          <SubmitButton
            buttonName={"Try another quiz"}
            handleDataSubmitted={this.props.handleDataSubmitted}
          />
          <SubmitButton
            buttonName={"See your results"}
            handleDataSubmitted={this.props.handleRetryQuiz}
          />
        </div>
      ),

      Story: (
        <div>
          <SubHeader
            subHeader={"Nice one, your score is " + this.props.score}/>
          <SubmitButton
            buttonName={"Try another quiz"}
            handleDataSubmitted={this.props.handleDataSubmitted}
          />
          <Story/>
        </div>
      ),
    };

      return (
        <div>
        {Views[this.decider()]}
        </div>
    )
  }
}

export default ResultsPage;
