import React, {Component} from 'react';
import SubHeader from './SubHeader';
import SubmitButton from './SubmitButton';
import Story from './Story';
import Text from './styledComponents/text.js';

class ResultsPage extends Component {

  decider = () => {
    if (this.props.storyState === true) {
      return 'Story';
    } else return 'ResultsPage';
  };

  randomChoice = strings => {
    return strings[Math.floor(Math.random() * strings.length)];
  };

  stringPrinter = (worstScore, badScore, averageScore, goodScore, perfectScore) => {
    if (this.props.score === 0) {
      return (
        this.randomChoice(worstScore)
      );
    }
    if (this.props.score > 0 && this.props.score <= 3) {
      return (
        this.randomChoice(badScore)
      );
    }
    if (this.props.score === 4) {
      return (
        this.randomChoice(averageScore)
      );
    }
    if (this.props.score > 4 && this.props.score <= 7) {
      return (
        this.randomChoice(goodScore)
      );
    } else return (
      this.randomChoice(perfectScore)
    )
  };

  whatLanguage = () => {
    if (this.props.french === true && this.props.frenchScen1 === true) {
      return "French"
    } if (this.props.french === true && this.props.frenchScen2 === true) {
      return "French"
    } else return "Spanish"
  };


  render() {
    const worstScore = [
      'Your ' + this.whatLanguage() + " is abysmal. But that's okay! Play more!",
      'This is embarrassing. Definitely check out your results to learn what went wrong!',
      "Well, you could have done worse...actually no. That's incorrect, just like all your answers!"
    ];

    const badScore = [
      "Okay, your " + this.whatLanguage() + " could be worse. Your learning starts here! Check out your results!",
      "Don't worry about it. Just repeat these scenarios and drill in those answers!"
    ];

    const averageScore = [
      "Bang on 50%. You can do better."
    ];

    const goodScore = [
      "Well done! You are well on your way to grasping the basics in " + this.whatLanguage(),
      "Good work, iron out those creases by checking out your results!"
    ];

    const perfectScore = [
      'Impressive. Your ' + this.whatLanguage() + ' is great',
      'Perfect score! How many times have you played this scenario?!'

    ];

    const Views = {
      ResultsPage: (
        <div>
          <Text>
            <SubHeader
              subHeader={"Your score is " + this.props.score}/>
            <p id="outputMessage">
              {this.stringPrinter(worstScore, badScore, averageScore, goodScore, perfectScore)}
            </p>
            <SubmitButton
              buttonName={"Try another quiz"}
              handleDataSubmitted={this.props.handleDataSubmitted}
            />
            <SubmitButton
              buttonName={"See your results"}
              handleDataSubmitted={this.props.handleRetryQuiz}
            />
          </Text>
        </div>
      ),

      Story: (
        <div>
          <SubHeader
            subHeader={"Your score is " + this.props.score}/>
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
