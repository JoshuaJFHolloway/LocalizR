import React, { Component } from 'react';
import Headers from './Headers';
import UsernameInputUnit from './UsernameInputUnit';
import EmailInputUnit from './EmailInputUnit';
import PasswordInputUnit from './PasswordInputUnit';
import SubmitButton from './SubmitButton';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      // dataSubmitted: false, // (will dictate whether next page loads)
      Username: null, // (this will be pushed to database)
      Email: null, // (this will be pushed to database)
      Password: null // (this will be pushed to database)
    };
  }

  //controlled and uncontrolled form fields - research it

    handleTextInput = event => {

      const target = event.target;
      const name = target.name;

      this.setState({
        [name]: target.value
      });
    };


    // handleDataSubmitted = () => {
    //     this.setState({
    //       dataSubmitted: true
    //     });
    //   };


  // const VIEWS = {
  //   scaleQuestion: (
  //     <ScaleQuestionView
  //       score={this.state.firstScaleScore}
  //       handleTextBoxInput={this.handleTextBoxInput}
  //       handleDisplayClick={this.handleDisplayClick}
  //     />
  //   ),
  //   output: <OutputView score={this.state.savedFirstScaleScore} />
  //
  //   decider() {
  //     if (this.state.buttonClicked === true) {
  //       return 'output';
  //     } else return 'scaleQuestion';
  //   }
  //
  // };



  render() {
    return (
      <div>
        <Headers/>
        <UsernameInputUnit
          handleTextInput = {this.handleTextInput}
          value ={this.state.Username}
          name={"Enter your username"}
          input={"Username"}
        />
        <EmailInputUnit
          handleTextInput = {this.handleTextInput}
          value ={this.state.Email}
          name={"Enter your email"}
          input={"Email"}
        />
        <PasswordInputUnit
          handleTextInput = {this.handleTextInput}
          value ={this.state.Password}
          name={"Enter your password"}
          input={"Password"}
        />
        <SubmitButton
          handleDataSubmitted = {this.props.handleDataSubmitted} // use this.props when passing on props to another comp
        />
      </div>
    );
  };
}

export default Form;