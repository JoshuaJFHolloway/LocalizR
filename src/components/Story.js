import React, { Component } from 'react';
import axios from 'axios';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      answer1: null,
      answer2: null,
      answer3: null,
      answer4: null,
      answer5: null,
      correctanswer1: null,
      correctanswer2: null,
      correctanswer3: null,
      correctanswer4: null,
      correctanswer5: null
    }
  }

  componentDidMount() {
      axios.get('http://localhost:3001/api/scenario')
        .then(res => {
          this.setState({ answer1: res.data[0].user_answer })
          this.setState({ answer2: res.data[1].user_answer })
          this.setState({ answer3: res.data[2].user_answer })
          this.setState({ answer4: res.data[3].user_answer })
          this.setState({ answer5: res.data[4].user_answer })
          this.setState({ correctanswer1: res.data[0].correct_answer })
          this.setState({ correctanswer2: res.data[1].correct_answer })
          this.setState({ correctanswer3: res.data[2].correct_answer })
          this.setState({ correctanswer4: res.data[3].correct_answer })
          this.setState({ correctanswer5: res.data[4].correct_answer })
        })
        .catch(function (error) {
          console.log(error);
        });
  }


  render() {
    return(
    <div>
      <h1>Your first answer was {this.state.answer1}, but the correct answer was {this.state.correctanswer1}</h1>
      <h1>Your second answer was {this.state.answer2}, but the correct answer was {this.state.correctanswer2}</h1>
      <h1>Your third answer was {this.state.answer3}, but the correct answer was {this.state.correctanswer3}</h1>
      <h1>Your forth answer was {this.state.answer4}, but the correct answer was {this.state.correctanswer4}</h1>
      <h1>Your fifth answer was {this.state.answer5}, but the correct answer was {this.state.correctanswer5}</h1>
    </div>
    )
  }
};

export default Story;
