import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Quiz from './Quiz';
import SpanishScenarios from './SpanishScenarios'


class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: false,
      spanishScen1: false,
      spanishScen2: false,

    };
  };

  // handleRetryQuiz = () => {
  //   if(this.state.spanishScen1=== true){
  //
  //   }
  // };

  handleDataSubmitted = () => {
    this.setState({
      spanish: false,
      spanishScen1: false,
      spanishScen2: false
    });
  };

  handlePictureClicked = () => {
    this.setState(prevState => ({
      spanish: !prevState.spanish
    }));
  };

  handleScenario1Clicked = () => {
    this.setState({
      spanishScen1: true,
    });
  };

  handleScenario2Clicked = () => {
    this.setState({
      spanishScen2: true,
    });
  };


  decider (){
      if((this.state.spanishScen1 === true && this.state.spanish === true) ||
        (this.state.spanishScen1 === true && this.state.spanish === false)) {
      return 'SpanishQuiz';
    } else if(this.state.spanishScen2 === true && this.state.spanish === true) {
      return 'SpanishQuiz2';
    } else if(this.state.spanish === true) {
      return 'SpanishScenarios';
    } else return 'LanguageList';
  };

  render() {

    const quizViews = {
      SpanishScenarios: (
        <LanguageList
          handlePictureClicked = {this.handlePictureClicked}
          spanishScenarios = {<SpanishScenarios
            handleScenario1Clicked = {this.handleScenario1Clicked}
            handleScenario2Clicked = {this.handleScenario2Clicked}
          />}
        />
      ),
      SpanishQuiz: (        
       <div> 
        <Quiz
          handleDataSubmitted = {this.handleDataSubmitted}
          handleRetryQuiz = {this.handlePictureClicked}
          scenario1={"You leave your house and start following these signs"}
          scenario2={"You arrive at the train station"}
          scenario3={"You get your ticket"}
          scenario4={"You head for your train"}
          scenario5={"You take the train to your stop. Once you get off, you want to head towards the market"}
          scenario6={"You get lost and stop to ask a stranger for directions"}
          scenario7={"The stranger replies '<directions in Spanish>' "}
          picture1={"https://www.opposuits.co.uk/media/catalog/product/cache/1/image/550x/925f46717e92fbc24a8e2d03b22927e1/s/s/ss_reddevil-lifestyle-01.jpg"}
          picture2={"https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg"}
          picture3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvBGJnQZGmYn5x2eq8ObdXtVSGOYVkjw-sUpjVlyTm3sbgrf9"}
          picture4={"http://www.colorear.net/dibujos/Minnie/thumbs/minnie-68_m.jpg"}
          picture5={"https://www.rooftopguiden.se/takbarer-i-dubai/Bilder/LaTerasseBarTerrace_1_slide.jpg"}
          picture6={""}
          picture7={""}
          picture8={""}
          question1={"Where are you going?"}
          question2={"How do you ask for a ticket?"}
          question3={"How do you ask how long the journey will take?"}
          question4={"Which platform do you need?"}
          question5={"Which way should you go?"}
          question6={"How do you ask where the market is?"}
          question7={"Which way should you go?"}
          question8={"How do you ask how much something costs"}
          answer1_1={"La estación de autobuses"}
          answer1_2={"La parada de metro"}
          correctAnswer1={"La estación de tren"}
          answer1_3={"La Universidad"}
          answer2_1={"Cuánto cuesta un tren?"}
          correctAnswer2={"Cuánto cuesta un billete?"}
          answer2_2={"Cuánto cuesta un coche?"}
          answer2_3={"Cuánto tarda en llegar? "}
          answer3_1={"Cuál es el ultimo tren?"}
          correctAnswer3={"Cuánto se tarda en llegar?"}
          answer3_2={"Cuál es el siguiente tren"}
          answer3_3={"Cuántos trenes hay?"}
          answer4_1={"Calle 7"}
          correctAnswer4={"Andén 7"}
          answer4_2={"Silla 7"}
          answer4_3={"Coche 7"}
          answer5_1={"Norte"}
          correctAnswer5={"Sur"}
          answer5_2={"Este"}
          answer5_3={"Oeste"} 
          answer6_1={"Dónde está el banco?"}
          correctAnswer6={"Dónde está el mercado?"}
          answer6_2={"Dónde está la tienda"}
          answer6_3={"Dónde está la fuente?"}
          answer7_1={"Gire a la izquierda y siga recto"}
          correctAnswer7={"Gire a la derecha y siga recto"}
          answer7_2={"Siga recto"}
          answer7_3={"Al final de la calle"}
          answer8_1={"Cuántos años tienes?"}
          correctAnswer8={"Cuánto cuesta?"}
          answer8_2={"Cuánto hay?"}
          answer8_3={"Cuántos hijos tienes?"} 

        />
        
        
        </div>  
      ),

      SpanishQuiz2:(
        <div>
        <Quiz
          handleDataSubmitted = {this.handleDataSubmitted}
          handleRetryQuiz = {this.handlePictureClicked}
          scenario1={"After a long trip to Malaga, you're getting ready to go to the beach, but you don't know how to the direction"}
          scenario2={"As a person who takes care of the skin, you need to buy sun protection to prevent sunburn.."}
          scenario3={"Now, You're getting to the beach by Bus... "}
          scenario4={"You're enjoying a nice day on the beach, but You're geting thristy... "}
          scenario5={"After a nice day on the beach, you lose the track time and you miss your bus .."}
          picture1={"https://i.gifer.com/BkoU.gif"}
          picture2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwXOsbPRiAAfruDCcVVkzXGQwvJYDOPjZF1wuJMuBE2jbMPA-"}
          picture3={"https://i.pinimg.com/originals/a3/4f/82/a34f82bc4ee3d8ed199ffd234f2a34e2.jpg"}
          picture4={"http://s03.s3c.es/imag/_v0/770x420/6/9/0/botella-agua-770x420-reuters.jpg"}
          picture5={"http://artmansnursery.com/wp-content/uploads/2015/06/clock.jpg"}
          question1={"Which of these is a swinsuit?"}
          question2={"Which of these is the sun protector?"}
          question3={"Which bus you need to get?"}
          question4={"What can you get?"}
          question5={"What time is the next bus?"}
          answer1_1={"Toalla"}
          correctAnswer1={"Bañador"}
          answer1_2={"Camiseta"}
          answer1_3={"Calcetines"}
          answer2_1={"Crema de cara"}
          correctAnswer2={"Protector solar"}
          answer2_2={"Pasta de dientes"}
          answer2_3={"Gel de baño"}
          answer3_1={"Dirección centro"}
          correctAnswer3={"Dirección playa"}
          answer3_2={"Dirección Feria"}
          answer3_3={"Dirección pueblo"}
          answer4_1={"Pan"}
          correctAnswer4={"Botella de agua"}
          answer4_2={"Botella de vino"}
          answer4_3={"Ensalada"}
          answer5_1={"Cinco y media"}
          correctAnswer5={"Seis en punto"}
          answer5_2={"Seis y media "}
          answer5_3={"Ocho en punto"}
        />
        </div>
      ),
      LanguageList: (
        <LanguageList
          handlePictureClicked = {this.handlePictureClicked}
        />
      ),
    };

    return (
      <div>
      {quizViews[this.decider()]}
      </div>
    )
  };
}

export default ChooseLanguage;
