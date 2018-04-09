import React, { Component } from 'react';
import QuizQ from './QuizQ';
import ResultsPage from './ResultsPage';


class Quiz extends Component {
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
    if (this.state.counter === 5) {
      return 'ResultsPage';
      } else if (this.state.counter === 1) {
        return 'QuizQ2';
      } else if (this.state.counter === 2){
        return 'QuizQ3';
      } else if (this.state.counter === 3){
        return 'QuizQ4'
      } else if (this.state.counter === 4){
        return 'QuizQ5'
      }
      else return 'QuizQ1';
    };



  render() {

    const Views = {
      ResultsPage: (
        <ResultsPage
          score = {this.state.score}
          />
      ),
        QuizQ1: (
          <QuizQ
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

        QuizQ2: (
          <QuizQ
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

        QuizQ3: (
          <QuizQ
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

        QuizQ4: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You want to impress your date with a nice compliment ...."}
            picture={"http://www.colorear.net/dibujos/Minnie/thumbs/minnie-68_m.jpg"}
            question={"Which of these is the best compliment?"}
            answer1={"Qué bello estás"}
            correctAnswer={"Qué guapa estás"}
            answer2={"Qué extraña estás"}
            answer3={"Qué grande estás"}
          />
        ),

        QuizQ5: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"After a romantic and successfull date, you're inviting your date for a drink..."}
            picture={"https://www.rooftopguiden.se/takbarer-i-dubai/Bilder/LaTerasseBarTerrace_1_slide.jpg"}
            question={"Which of these is the best option?"}
            answer1={"Mercado"}
            correctAnswer={"Terraza-Bar de copas"}
            answer2={"Banco"}
            answer3={"Tienda"}
          />
        ),

        QuizQ1: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"After a long trip to Malaga, you're getting ready to go to the beach, but you don't know how to the direction"}
            picture={"https://i.gifer.com/BkoU.gif"}
            question={"Which of these is a swinsuit?"}
            answer1={"Toalla"}
            correctAnswer={"Bañador"}
            answer2={"Camiseta"}
            answer3={"Calcetines"}
          />
        ),

        QuizQ2: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"As a person who takes care of the skin, you need to buy sun protection to prevent sunburn.."}
            picture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwXOsbPRiAAfruDCcVVkzXGQwvJYDOPjZF1wuJMuBE2jbMPA-"}
            question={"Which of these is the sun protector?"}
            answer1={"Crema de cara"}
            correctAnswer={"Protector solar"}
            answer2={"Pasta de dientes"}
            answer3={"Gel de baño"}
          />
        ),

        QuizQ3: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"Now, You're getting to the beach by Bus... "}
            picture={"https://i.pinimg.com/originals/a3/4f/82/a34f82bc4ee3d8ed199ffd234f2a34e2.jpg"}
            question={"Which bus you need to get?"}
            answer1={"Dirección centro"}
            correctAnswer={"Dirección playa"}
            answer2={"Dirección Feria"}
            answer3={"Dirección pueblo"}
          />
        ),

        QuizQ4: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"You're enjoying a nice day on the beach, but You're geting thristy... "}
            picture={"http://s03.s3c.es/imag/_v0/770x420/6/9/0/botella-agua-770x420-reuters.jpg"}
            question={"What can you get?"}
            answer1={"Pan"}
            correctAnswer={"Botella de agua"}
            answer2={"Botella de vino"}
            answer3={"Ensalada"}
          />
        ),

        QuizQ5: (
          <QuizQ
            handleAnswerSubmitted = {this.handleAnswerSubmitted}
            handleCorrectAnswerSubmitted = {this.handleCorrectAnswerSubmitted}
            scenario={"After a nice day on the beach, you lose the track time and you miss your bus .."}
            picture={"http://artmansnursery.com/wp-content/uploads/2015/06/clock.jpg"}
            question={"What time is the next bus?"}
            answer1={"Cinco y media"}
            correctAnswer={"Seis en punto"}
            answer2={"Seis y media "}
            answer3={"Ocho en punto"}
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

export default Quiz;