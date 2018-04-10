import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Quiz from './Quiz';
import SpanishScenarios from './SpanishScenarios'


class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: false,
      french: false,
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
      french: false,
      spanishScen1: false,
      spanishScen2: false
    });
  };

  handlePictureClicked = () => {
    this.setState(prevState => ({
      spanish: !prevState.spanish,
      french: !prevState.french
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
//keep scenario for both languages except the states, modify the decider so if this.state.scen1 === true &&
// this.state.french === false return 'frenchQuiz'

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
          spanishImage={"https://cdn2.iconfinder.com/data/icons/Flag/134/Spain.png"}
          frenchImage={"https://cdn.countryflags.com/thumbs/france/flag-round-250.png"}
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
          scenario1={"You enter in a restaurant"}
          scenario2={"You're seated at a table"}
          scenario3={"You're ready to order your main meal"}
          scenario4={"You're not happy with your food"}
          scenario5={"Your waiter brings you more food"}
          scenario6={"When you finish your food the waiter comes to your table"}
          scenario7={"You said yes as you are still pekish"}
          scenario8={"You finish your dessert"}
          picture1={"https://i.gifer.com/BkoU.gif"}
          picture2={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjwXOsbPRiAAfruDCcVVkzXGQwvJYDOPjZF1wuJMuBE2jbMPA-"}
          picture3={"https://i.pinimg.com/originals/a3/4f/82/a34f82bc4ee3d8ed199ffd234f2a34e2.jpg"}
          picture4={"http://s03.s3c.es/imag/_v0/770x420/6/9/0/botella-agua-770x420-reuters.jpg"}
          picture5={"http://artmansnursery.com/wp-content/uploads/2015/06/clock.jpg"}
          picture6={"https://i.pinimg.com/originals/a3/4f/82/a34f82bc4ee3d8ed199ffd234f2a34e2.jpg"}
          picture7={"http://s03.s3c.es/imag/_v0/770x420/6/9/0/botella-agua-770x420-reuters.jpg"}
          picture8={"http://artmansnursery.com/wp-content/uploads/2015/06/clock.jpg"}
          question1={"How do you ask for a table for two?"}
          question2={"You want to order a glass of red wine.."}
          question3={"You decide to order Octopus"}
          question4={"How would you complain when your food is cold??"}
          question5={"You want to tell the waiter it tastes great"}
          question6={"He askes you 'Quieres el postre?'"}
          question7={"How would you ask for Ice Cream?"}
          question8={"How would you ask for the bill?"}
          answer1_1={"Una mesa para cinco personas, por favor"}
          correctAnswer1={"Una mesa para dos personas, por favor"}
          answer1_2={"Una silla para dos personas, por favor"}
          answer1_3={"Una carta para tres presonas, por favor"}
          answer2_1={"Quiero un vaso de agua"}
          correctAnswer2={"Quiero una copa de vino tinto"}
          answer2_2={"Quiero una copa de vino blanco "}
          answer2_3={"Quiero un vaso de vino tinto"}
          answer3_1={"Pescado"}
          correctAnswer3={"Pulpo a la gallega"}
          answer3_2={"Albondigas"}
          answer3_3={"Arroz"}
          answer4_1={"Disculpe, la comida está caliente"}
          correctAnswer4={"Disculpe, la comida está fria"}
          answer4_2={"Me encanta la comida"}
          answer4_3={"Disculpe, la bebida está fria"}
          answer5_1={"respuesta"}
          correctAnswer5={"Está delicioso"}
          answer5_2={"respuesta"}
          answer5_3={"respuesta"}
          answer6_1={"Do you want a drink?"}
          correctAnswer6={"Do you want dessert?"}
          answer6_2={"Do you want fruit?"}
          answer6_3={"Do you want salt"}
          answer7_1={"Quiero una servilleta"}
          correctAnswer7={"Quiero un helado"}
          answer7_2={"Quiero un pastel"}
          answer7_3={"Quiero una copa"}
          answer8_1={"Me puede invitar, por favor?"}
          correctAnswer8={"Me puede traer la cuenta, por favor?"}
          answer8_2={"Mi amigo paga la cuenta"}
          answer8_3={"Donde está la salida"}
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
