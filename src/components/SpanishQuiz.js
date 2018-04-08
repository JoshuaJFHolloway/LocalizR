import React, { Component } from 'react';
import SpanishQuizQ from './SpanishQuizQ';
import ResultsPage from './ResultsPage';


class SpanishQuiz extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      counter: 0,
      nextQuestion: false,
      lastQuestion: false,
    }
  }


  handleCorrectAnswerSubmitted = () => {
    this.setState({
      counter: this.state.counter + 1,
      score: this.state.score + 1
    })
  };



  handleAnswerSubmitted = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };


  decider = () => {
    if (this.state.counter === 4) {
      return 'ResultsPage';
      } else if (this.state.counter === 1) {
        return 'SpanishQuizQ2';
      } else if (this.state.counter === 2){
        return 'SpanishQuizQ3';
      } else if (this.state.counter === 3){
        return 'SpanishQuizQ4'
      }
      else return 'SpanishQuizQ';
    };



  render() {

    const Views = {
      ResultsPage: (
        <ResultsPage
          score = {this.state.score}
          />
      ),
        SpanishQuizQ: (
          <SpanishQuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You choose to wear this for your date"}
            picture={"https://www.opposuits.co.uk/media/catalog/product/cache/1/image/550x/925f46717e92fbc24a8e2d03b22927e1/s/s/ss_reddevil-lifestyle-01.jpg"}
            question={"Which of these is your suit?"}
            answer1={"el vestido rojo"}
            correctAnswer={"el traje rojo"}
            answer2={"Los pantalones rojos"}
            answer3={"La camiseta roja"}
          />
        ),

        SpanishQuizQ2: (
          <SpanishQuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You're going to the restaurant where your date is waiting for you..."}
            picture={"https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg"}
            question={"Which direction you should take?"}
            answer1={"Este"}
            correctAnswer={"Oeste"}
            answer2={"Norte"}
            answer3={"Sur"}
          />
        ),

        SpanishQuizQ3: (
          <SpanishQuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You want to surprise your date with some ...."}
            picture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvBGJnQZGmYn5x2eq8ObdXtVSGOYVkjw-sUpjVlyTm3sbgrf9"}
            question={"What is your idea of the perfect romantic gift?"}
            answer1={"Galletas"}
            correctAnswer={"Flores"}
            answer2={"Cucharas"}
            answer3={"Uvas"}
          />
        ),

        SpanishQuizQ4: (
          <SpanishQuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You want to impress your date with a nice compliment ...."}
            picture={"http://www.colorear.net/dibujos/Minnie/thumbs/minnie-68_m.jpg"}
            question={"Which of these is the best compliment?"}
            answer1={"Bello"}
            correctAnswer={"Guapa"}
            answer2={"Extraña"}
            answer3={"Grande"}
          />
        ),

        SpanishQuizQ5: (
          <SpanishQuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You want to impress your date with a nice compliment ...."}
            picture={"http://www.colorear.net/dibujos/Minnie/thumbs/minnie-68_m.jpg"}
            question={"Which of these is the best compliment?"}
            answer1={"Bello"}
            correctAnswer={"Guapa"}
            answer2={"Extraña"}
            answer3={"Grande"}
          />
        ),
    };

    return (
      <div>
        {Views[this.decider()]}
      </div>
    )
  }
}

export default SpanishQuiz;