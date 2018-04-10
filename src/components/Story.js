import React, { Component } from 'react';
import axios from 'axios';

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
        for( i = 0; i < 5; i++ ) {
          this.setState({answers: [...this.state.answers, res.data[i].user_answer]})
          if(res.data[i].user_answer === res.data[i].correct_answer) {
            this.setState({responses: [...this.state.responses, "you got it right!"]})
          } else {
            this.setState({responses: [...this.state.responses, "but the correct answer was " + res.data[i].correct_answer]})
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return(
      <div>
        <h1>Your first answer was {this.state.answers[0]}, {this.state.responses[0]}</h1>
        <h1>Your second answer was {this.state.answers[1]}, {this.state.responses[1]}</h1>
        <h1>Your third answer was {this.state.answers[2]}, {this.state.responses[2]}</h1>
        <h1>Your forth answer was {this.state.answers[3]}, {this.state.responses[3]}</h1>
        <h1>Your fifth answer was {this.state.answers[4]}, {this.state.responses[4]}</h1>
      </div>
    )
  }
}

export default Story;
