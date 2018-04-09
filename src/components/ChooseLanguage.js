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
      if(this.state.spanishScen1 === true && this.state.spanish === true) {
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
          scenario1={"You choose to wear this for your date"}
          scenario2={"You're going to the restaurant where your date is waiting for you..."}
          scenario3={"You want to surprise your date with some ...."}
          scenario4={"You want to impress your date with a nice compliment ...."}
          scenario5={"After a romantic and successfull date, you're inviting your date for a drink..."}
          picture1={"https://www.opposuits.co.uk/media/catalog/product/cache/1/image/550x/925f46717e92fbc24a8e2d03b22927e1/s/s/ss_reddevil-lifestyle-01.jpg"}
          picture2={"https://www.harvard.edu/sites/default/files/content/harvard-map-google.jpg"}
          picture3={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvBGJnQZGmYn5x2eq8ObdXtVSGOYVkjw-sUpjVlyTm3sbgrf9"}
          picture4={"http://www.colorear.net/dibujos/Minnie/thumbs/minnie-68_m.jpg"}
          picture5={"https://www.rooftopguiden.se/takbarer-i-dubai/Bilder/LaTerasseBarTerrace_1_slide.jpg"}
          question1={"Which of these is your suit?"}
          question2={"Which direction you should take?"}
          question3={"What is your idea of the perfect romantic gift?"}
          question4={"Which of these is the best compliment?"}
          question5={"Which of these is the best option?"}
          answer1_1={"el vestido rojo"}
          answer1_2={"Los pantalones rojos"}
          correctAnswer1={"el traje rojo"}
          answer1_3={"La camiseta roja"}
          answer2_1={"Este"}
          correctAnswer2={"Oeste"}
          answer2_2={"Norte"}
          answer2_3={"Sur"}
          answer3_1={"Galletas"}
          correctAnswer3={"Flores"}
          answer3_2={"Cucharas"}
          answer3_3={"Uvas"}
          answer4_1={"Qué bello estás"}
          correctAnswer4={"Qué guapa estás"}
          answer4_2={"Qué extraña estás"}
          answer4_3={"Qué grande estás"}
          answer5_1={"Mercado"}
          correctAnswer5={"Terraza-Bar de copas"}
          answer5_2={"Banco"}
          answer5_3={"Tienda"} 
        />
        
        
        </div>  
      ),

      SpanishQuiz2:(
        <div>
        <Quiz
          scenario={"After a long trip to Malaga, you're getting ready to go to the beach, but you don't know how to the direction"}
          
          
          
          
          picture={"https://i.gifer.com/BkoU.gif"}
          
          
          
          question={"Which of these is a swinsuit?"}
          
          
          
          answer1={"Toalla"}
          correctAnswer={"Bañador"}
          answer2={"Camiseta"}
          answer3={"Calcetines"}




        />

        <Quiz 
          scenario={"As a person who takes care of the skin, you need to buy sun protection to prevent sunburn.."}
          picture={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwXOsbPRiAAfruDCcVVkzXGQwvJYDOPjZF1wuJMuBE2jbMPA-"}
          question={"Which of these is the sun protector?"}
          answer1={"Crema de cara"}
          correctAnswer={"Protector solar"}
          answer2={"Pasta de dientes"}
          answer3={"Gel de baño"}
        />
        <Quiz 
          scenario={"Now, You're getting to the beach by Bus... "}
          picture={"https://i.pinimg.com/originals/a3/4f/82/a34f82bc4ee3d8ed199ffd234f2a34e2.jpg"}
          question={"Which bus you need to get?"}
          answer1={"Dirección centro"}
          correctAnswer={"Dirección playa"}
          answer2={"Dirección Feria"}
          answer3={"Dirección pueblo"}
        />
         
        <Quiz 
          scenario={"You're enjoying a nice day on the beach, but You're geting thristy... "}
          picture={"http://s03.s3c.es/imag/_v0/770x420/6/9/0/botella-agua-770x420-reuters.jpg"}
          question={"What can you get?"}
          answer1={"Pan"}
          correctAnswer={"Botella de agua"}
          answer2={"Botella de vino"}
          answer3={"Ensalada"}
        /> 
        <Quiz
          scenario={"After a nice day on the beach, you lose the track time and you miss your bus .."}
          picture={"http://artmansnursery.com/wp-content/uploads/2015/06/clock.jpg"}
          question={"What time is the next bus?"}
          answer1={"Cinco y media"}
          correctAnswer={"Seis en punto"}
          answer2={"Seis y media "}
          answer3={"Ocho en punto"}
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
