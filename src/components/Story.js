import React, {Component} from 'react';
import axios from 'axios';
import Text from './styledComponents/text.js';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      answers: [],
      responses: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/scenario')
      .then(res => {
        var i;
        for (i = 0; i < 8; i++) {
          this.setState({answers: [...this.state.answers, res.data[i].user_answer]});
          if (res.data[i].user_answer === res.data[i].correct_answer) {
            this.setState({responses: [...this.state.responses, "you got it right!"]})
          } else {
            this.setState({responses: [...this.state.responses, "but the correct answer was '" + res.data[i].correct_answer + "'"]})
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <Text>
        <h6>Your first answer was '{this.state.answers[0]}', {this.state.responses[0]}</h6>
        <h6>Your second answer was '{this.state.answers[1]}', {this.state.responses[1]}</h6>
        <h6>Your third answer was '{this.state.answers[2]}', {this.state.responses[2]}</h6>
        <h6>Your forth answer was '{this.state.answers[3]}', {this.state.responses[3]}</h6>
        <h6>Your fifth answer was '{this.state.answers[4]}', {this.state.responses[4]}</h6>
        <h6>Your sixth answer was '{this.state.answers[5]}', {this.state.responses[5]}</h6>
        <h6>Your seventh answer was '{this.state.answers[6]}', {this.state.responses[6]}</h6>
        <h6>Your eighth answer was '{this.state.answers[7]}', {this.state.responses[7]}</h6>
      </Text>
    )
  }
}

export default Story;
