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
      answer5: null
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
        })
        .catch(function (error) {
          console.log(error);
        });
  }


  render() {
    return(
    <div>
      <h1>Your first answer was {this.state.answer1}</h1>
      <h1>Your second answer was {this.state.answer2}</h1>
      <h1>Your third answer was {this.state.answer3}</h1>
      <h1>Your forth answer was {this.state.answer4}</h1>
      <h1>Your fifth answer was {this.state.answer5}</h1>
    </div>
    )
  }
};

export default Story;
