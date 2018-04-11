import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Quiz from './Quiz';
import Scenarios from './Scenarios'
import axios from 'axios';


class ChooseLanguage extends Component {

  constructor(){
    super();
    this.state = {
      spanish: false,
      french: false,
      spanishScen1: false,
      spanishScen2: false,
      frenchScen1: false,
      frenchScen2: false,
      story: false
    };
  };

  handleResults = () => {

    this.setState({
      story: true
    })

  };


  handleDataSubmitted = () => {
    this.setState({
      spanish: false,
      french: false,
      spanishScen1: false,
      spanishScen2: false,
      frenchScen1: false,
      frenchScen2: false,
      story: false
    });
  };

  handleSpanishClicked = () => {
    this.setState(prevState => ({
      spanish: !prevState.spanish,
    }));
    axios.delete('http://localhost:3001/api/scenario')
      .then(res => {
        console.log('Cleaned database');
      })
      .catch(err => {
        console.log(err)
      })
  };

  handleFrenchClicked = () => {
    this.setState(prevState => ({
      french: !prevState.french
    }));
  };

  handleScenario1Clicked = () => {
    this.setState({
      spanishScen1: true,
      frenchScen1: true,
    });
  };

  handleScenario2Clicked = () => {
    this.setState({
      spanishScen2: true,
      frenchScen2: true,
    });
  };

  decider (){
    if(this.state.spanishScen1 === true && this.state.spanish === true) {
        return 'SpanishQuiz';
     } else if(this.state.frenchScen1 === true && this.state.french === true) {
        return 'FrenchQuiz';
    } else if(this.state.spanishScen2 === true && this.state.spanish === true) {
        return 'SpanishQuiz2';
    } else if(this.state.frenchScen2 === true && this.state.french === true) {
        return 'FrenchQuiz2';
    } else if(this.state.spanish === true) {
        return 'SpanishScenarios';
    } else if(this.state.french === true) {
        return 'FrenchScenarios';
    } else return 'LanguageList';
  };

  render() {
    const quizViews = {
      SpanishScenarios: (
        <LanguageList
          handleSpanishClicked = {this.handleSpanishClicked}
          handleFrenchClicked = {this.handleFrenchClicked}
          spanishImage={"https://image.ibb.co/d3XjxH/la_spanishflag.png"}
          frenchImage={"https://image.ibb.co/e62jxH/la_frenchflag.png"}
          spanishScenarios = {<Scenarios
            handleScenario1Clicked = {this.handleScenario1Clicked}
            handleScenario2Clicked = {this.handleScenario2Clicked}
            buttonName1={"Getting Around"}
            buttonName2={"Eating out"}
          />}
        />
      ),
      SpanishQuiz: (
       <div>
        <Quiz
          handleResults = {this.handleResults}
          storyState={this.state.story}
        handleScenario1Clicked = {this.handleScenario1Clicked}
        handleScenario2Clicked = {this.handleScenario2Clicked}

          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You leave your house and start following these signs"}
          scenario2={"You arrive at the train station"}
          scenario3={"You get your ticket"}
          scenario4={"You head for your train"}
          scenario5={"You take the train to your stop. Once you get off, you want to head towards the market"}
          scenario6={"You get lost and stop to ask a stranger for directions"}
          scenario7={"The stranger replies '<directions in Spanish>' "}
          scenario8={"You eventually make it to the market"}
          picture1={"https://image.ibb.co/nKgejx/la_town_pict1.jpg"}
          picture2={"https://preview.ibb.co/n1Uezx/la_town_pict2.jpg"}
          picture3={"https://preview.ibb.co/ekQDRc/la_town_pict3.jpg"}
          picture4={"https://preview.ibb.co/fQ24XH/la_town_pict4.jpg"}
          picture5={"https://preview.ibb.co/ndZjXH/la_question5.png"}
          picture6={"https://preview.ibb.co/kjJdsH/la_town_pict5.jpg"}
          picture7={"https://preview.ibb.co/cuaisH/la_question6.png"}
          picture8={"https://preview.ibb.co/iuxGex/la_town_pict6.jpg"}
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
          storyState={this.state.story}
          handleResults = {this.handleResults}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You enter in a restaurant"}
          scenario2={"You're seated at a table"}
          scenario3={"You're ready to order your main meal"}
          scenario4={"You're not happy with your food"}
          scenario5={"Your waiter brings you more food"}
          scenario6={"When you finish your food the waiter comes to your table"}
          scenario7={"You said yes as you are still pekish"}
          scenario8={"You finish your dessert"}
          picture1={"https://preview.ibb.co/cPrEXH/la_rest_pict1.jpg"}
          picture2={"https://preview.ibb.co/b3vmex/la_rest_pict2.jpg"}
          picture3={"https://preview.ibb.co/d8vmex/la_rest_pict3.jpg"}
          picture4={"https://preview.ibb.co/nu9q6c/la_rest_pict4.jpg"}
          picture5={"https://preview.ibb.co/iYq8sH/la_rest_pict5jpg.jpg"}
          picture6={"https://preview.ibb.co/hpf8sH/la_rest_pict6.jpg"}
          picture7={"https://preview.ibb.co/d6yWxH/la_rest_pict7.jpg"}
          picture8={"https://preview.ibb.co/kRLKzx/la_rest_pict8.jpg"}
          question1={"How do you ask for a table for two?"}
          question2={"You want to order a glass of red wine.."}
          question3={"You decide to order Octopus"}
          question4={"How would you complain when your food is cold??"}
          question5={"You want to tell the waiter it tastes great"}
          question6={"He askes you 'Quieres el postre?'"}
          question7={"How would you ask for Ice Cream?"}
          question8={"How would you ask for the bill?"}
          answer1_1={"La parada de metro"}
          correctAnswer1={"La estacion de tren"}
          answer1_2={"La estacion de autobus"}
          answer1_3={"La estacion de bomberos"}
          answer2_1={"Quiero un vaso de agua"}
          correctAnswer2={"Quiero una copa de vino tinto"}
          answer2_2={"Quiero una copa de vino blanco "}
          answer2_3={"Quiero un vaso de vino tinto"}
          answer3_1={"Pescado"}
          correctAnswer3={"Pulpo"}
          answer3_2={"Albondigas"}
          answer3_3={"Arroz"}
          answer4_1={"Disculpe, la comida está caliente"}
          correctAnswer4={"Disculpe, la comida está fria"}
          answer4_2={"Me encanta la comida"}
          answer4_3={"Disculpe, la bebida está fria"}
          answer5_1={"Está crudo"}
          correctAnswer5={"Está delicioso"}
          answer5_2={"Está picante"}
          answer5_3={"Está salado"}
          answer6_1={"Do you want a drink?"}
          correctAnswer6={"Do you want dessert?"}
          answer6_2={"Do you want fruit?"}
          answer6_3={"Do you want salt"}
          answer7_1={"Quiero una servilleta"}
          correctAnswer7={"Quiero un helado"}
          answer7_2={"Quiero un pastel"}
          answer7_3={"Quiero una fruta"}
          answer8_1={"Me puede traer un tenedor, por favor?"}
          correctAnswer8={"Me puede traer la cuenta, por favor?"}
          answer8_2={"Mi amigo paga la cuenta"}
          answer8_3={"Me puedes traer la carta, por favor?"}
        />
        </div>
      ),

      FrenchScenarios: (
        <LanguageList
          handleFrenchClicked = {this.handleFrenchClicked}
          handleSpanishClicked = {this.handleSpanishClicked}
          frenchImage={"https://image.ibb.co/e62jxH/la_frenchflag.png"}
          spanishImage={"https://image.ibb.co/d3XjxH/la_spanishflag.png"}
          frenchScenarios = {<Scenarios
            handleScenario1Clicked = {this.handleScenario1Clicked}
            handleScenario2Clicked = {this.handleScenario2Clicked}
            buttonName1={"Getting around"}
            buttonName2={"Eating out"}
          />}
        />
      ),
      FrenchQuiz: (
       <div>
        <Quiz
          storyState={this.state.story}
          handleResults = {this.handleResults}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You leave your house and start following these signs"}
          scenario2={"You arrive at the train station"}
          scenario3={"You get your ticket"}
          scenario4={"You head for your train"}
          scenario5={"You take the train to your stop. Once you get off, you want to head towards the market"}
          scenario6={"You get lost and stop to ask a stranger for directions"}
          scenario7={"The stranger replies '<directions in Spanish>' "}
          picture1={"https://image.ibb.co/nKgejx/la_town_pict1.jpg"}
          picture2={"https://preview.ibb.co/n1Uezx/la_town_pict2.jpg"}
          picture3={"https://preview.ibb.co/ekQDRc/la_town_pict3.jpg"}
          picture4={"https://preview.ibb.co/fQ24XH/la_town_pict4.jpg"}
          picture5={"https://preview.ibb.co/ndZjXH/la_question5.png"}
          picture6={"https://preview.ibb.co/kjJdsH/la_town_pict5.jpg"}
          picture7={"https://preview.ibb.co/cuaisH/la_question6.png"}
          picture8={"https://preview.ibb.co/iuxGex/la_town_pict6.jpg"}
          question1={"Where are you going?"}
          question2={"How do you ask for a ticket?"}
          question3={"How do you ask how long the journey will take?"}
          question4={"Which platform do you need?"}
          question5={"Which way should you go?"}
          question6={"How do you ask where the market is?"}
          question7={"Which way should you go?"}
          question8={"How do you ask how much something costs"}
          answer1_1={"la gare de bus"}
          answer1_2={"La parada de metro"}
          correctAnswer1={"La station de métro"}
          answer1_3={"La caserne de pompiers"}
          answer2_1={"Combien coûte un train?"}
          correctAnswer2={"Combien coûte un billet?"}
          answer2_2={"Combien coûte une voiture?"}
          answer2_3={"Combien de temps il faut pour arriver?"}
          answer3_1={"Quel est le dernier train?"}
          correctAnswer3={"Combien de temps il faut pour y arriver?"}
          answer3_2={"Quel est le prochain train"}
          answer3_3={"Combien y a-t-il de trains?"}
          answer4_1={"Rue 7"}
          correctAnswer4={"Plateforme 7"}
          answer4_2={"Chaise 7"}
          answer4_3={"Voiture7"}
          answer5_1={"Nord"}
          correctAnswer5={"Sud"}
          answer5_2={"Est"}
          answer5_3={"Ouest"}
          answer6_1={"Où est la banque?"}
          correctAnswer6={"Où est le marché?"}
          answer6_2={"Où est le magasin?"}
          answer6_3={"Où est la source?"}
          answer7_1={"Tourner à gauche et continuer tout droit"}
          correctAnswer7={"Tourner à droite et continuer tout droit"}
          answer7_2={"Aller tout droit"}
          answer7_3={"au bout de la rue"}
          answer8_1={"Quel âge as-tu?"}
          correctAnswer8={"combien coûte?"}
          answer8_2={"combien il y a?"}
          answer8_3={"combien d'enfants avez-vous?"}

        />
        </div>
      ),

      FrenchQuiz2:(
        <div>
        <Quiz
          storyState={this.state.story}
          handleResults = {this.handleResults}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You enter in a restaurant"}
          scenario2={"You're seated at a table"}
          scenario3={"You're ready to order your main meal"}
          scenario4={"You're not happy with your food"}
          scenario5={"Your waiter brings you more food"}
          scenario6={"When you finish your food the waiter comes to your table"}
          scenario7={"You said yes as you are still pekish"}
          scenario8={"You finish your dessert"}
          picture1={"https://preview.ibb.co/cPrEXH/la_rest_pict1.jpg"}
          picture2={"https://preview.ibb.co/b3vmex/la_rest_pict2.jpg"}
          picture3={"https://preview.ibb.co/fZa3cH/la_frenchmenu.jpg"}
          picture4={"https://preview.ibb.co/nu9q6c/la_rest_pict4.jpg"}
          picture5={"https://preview.ibb.co/iYq8sH/la_rest_pict5jpg.jpg"}
          picture6={"https://preview.ibb.co/hpf8sH/la_rest_pict6.jpg"}
          picture7={"https://preview.ibb.co/d6yWxH/la_rest_pict7.jpg"}
          picture8={"https://preview.ibb.co/kRLKzx/la_rest_pict8.jpg"}
          question1={"How do you ask for a table for two?"}
          question2={"You want to order a glass of red wine.."}
          question3={"You decide to order Octopus"}
          question4={"How would you complain when your food is cold??"}
          question5={"You want to tell the waiter it tastes great"}
          question6={"He askes you 'Voulez-vous un dessert?'"}
          question7={"How would you ask for Ice Cream?"}
          question8={"How would you ask for the bill?"}
          answer1_1={"table pour cinq personnes s'il vous plaît"}
          correctAnswer1={"table pour deux personnes s'il vous plaît"}
          answer1_2={"Chaise pour deux personnes s'il vous plaît"}
          answer1_3={"Lettre pour deux personnes s'il vous plaît"}
          answer2_1={"Je veux un verre d'eau"}
          correctAnswer2={"Je veux un verre de vin rouge"}
          answer2_2={"Je veux un verre de vin blanc "}
          answer2_3={"Je veux une bouteille de vin rouge"}
          answer3_1={"Poisson"}
          correctAnswer3={"Poulpe"}
          answer3_2={"Boulettes de viande"}
          answer3_3={"Riz"}
          answer4_1={"Excusez-moi, la nourriture est chaude"}
          correctAnswer4={"Excusez-moi, la nourriture est froide"}
          answer4_2={"J'adore la nourriture"}
          answer4_3={"Excusez-moi, la boisson est froide"}
          answer5_1={"ce cru"}
          correctAnswer5={"c'est délicieux"}
          answer5_2={"cette épice"}
          answer5_3={"ce salé"}
          answer6_1={"Do you want a drink?"}
          correctAnswer6={"Do you want dessert?"}
          answer6_2={"Do you want fruit?"}
          answer6_3={"Do you want salt"}
          answer7_1={"Je veux une serviette"}
          correctAnswer7={"Je veux une glace"}
          answer7_2={"Je veux un gâteau"}
          answer7_3={"Je veux un fruit"}
          answer8_1={"Peux-tu m'apporter une fourchette s'il te plait?"}
          correctAnswer8={"Pouvez-vous m'apporter la facture s'il vous plaît?"}
          answer8_2={"Mon ami paie la facture"}
          answer8_3={"Peux-tu m'apporter la lettre s'il vous plaît?"}
        />
        </div>
      ),
      LanguageList: (
        <LanguageList
          handleSpanishClicked = {this.handleSpanishClicked}
          handleFrenchClicked = {this.handleFrenchClicked}
          spanishImage={"https://image.ibb.co/d3XjxH/la_spanishflag.png"}
          frenchImage={"https://image.ibb.co/e62jxH/la_frenchflag.png"}
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
