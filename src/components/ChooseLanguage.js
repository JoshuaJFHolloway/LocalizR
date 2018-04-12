import React, { Component } from 'react';
import LanguageList from './LanguageList';
import Quiz from './Quiz';
import Scenarios from './Scenarios'
import axios from 'axios';


class ChooseLanguage extends Component {

  constructor() {
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

  handleRandomScenario = () => {
    const array = [true, false, false, false];

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
      this.arrayIndex0 = array[0];
      this.arrayIndex1 = array[1];
      this.arrayIndex2 = array[2];
      this.arrayIndex3 = array[3];
    }

    this.setState({
      spanish: true,
      french: true,
      spanishScen1: this.arrayIndex0,
      spanishScen2: this.arrayIndex1,
      frenchScen1: this.arrayIndex2,
      frenchScen2: this.arrayIndex3
    });
  };

  decider() {
    if (this.state.spanishScen1 === true && this.state.spanish === true) {
      return 'SpanishQuiz';
    } else if (this.state.frenchScen1 === true && this.state.french === true) {
      return 'FrenchQuiz';
    } else if (this.state.spanishScen2 === true && this.state.spanish === true) {
      return 'SpanishQuiz2';
    } else if (this.state.frenchScen2 === true && this.state.french === true) {
      return 'FrenchQuiz2';
    } else if (this.state.spanish === true) {
      return 'SpanishScenarios';
    } else if (this.state.french === true) {
      return 'FrenchScenarios';
    } else return 'LanguageList';
  };

  render() {
    const quizViews = {
      SpanishScenarios: (
        <LanguageList
          handleSpanishClicked={this.handleSpanishClicked}
          handleFrenchClicked={this.handleFrenchClicked}
          spanishImage={"https://image.ibb.co/ksvj1c/la_spanishflag.png"}
          frenchImage={"https://image.ibb.co/hfnxMc/la_frenchflag.png"}
          spanishScenarios={<Scenarios
            handleScenario1Clicked={this.handleScenario1Clicked}
            handleScenario2Clicked={this.handleScenario2Clicked}
            buttonName1={"Getting around"}
            buttonName2={"Eating out"}
          />}
        />
      ),
      SpanishQuiz: (
        <div>
          <Quiz
            handleResults={this.handleResults}
            storyState={this.state.story}
            handleScenario1Clicked={this.handleScenario1Clicked}
            handleScenario2Clicked={this.handleScenario2Clicked}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You leave your house and start following these signs"}
          scenario2={"You arrive at the train station"}
          scenario3={"You get your ticket"}
          scenario4={"You head for your train"}
          scenario5={"You take the train to your stop. Once you get off, you want to head towards the market so you check your map"}
          scenario6={"You get lost and stop to ask a stranger for directions"}
          scenario7={"The stranger tells you to turn right and go straight"}
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
          question8={"How do you ask how much something costs?"}
          answer1_1={"La estación de autobuses"}
          answer1_2={"La parada de metro"}
          correctAnswer1={"La estación de tren"}
          answer1_3={"La Universidad"}
          answer2_1={"Quiero comprar un coche"}
          correctAnswer2={"Quiero un billete de tren"}
          answer2_2={"Quiero un sitio en el tren"}
          answer2_3={"Quiero un tren"}
          answer3_1={"Cuál es el ultimo tren?"}
          correctAnswer3={"Cuánto durará el trayecto?"}
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
          answer6_2={"Dónde está la tienda?"}
          answer6_3={"Dónde está la fuente?"}
          answer7_1={"Gire a la izquierda y siga recto"}
          correctAnswer7={"Gire a la derecha y siga recto"}
          answer7_2={"Siga recto"}
          answer7_3={"Al final de la calle"}
          answer8_1={"Cuánto tienes?"}
          correctAnswer8={"Cuánto cuesta esto?"}
          answer8_2={"Cuánto hay?"}
          answer8_3={"Qué es eso?"}
        />        
        </div>
      ),

      SpanishQuiz2: (
        <div>
        <Quiz
         handleResults={this.handleResults}
            storyState={this.state.story}
            handleScenario1Clicked={this.handleScenario1Clicked}
            handleScenario2Clicked={this.handleScenario2Clicked}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You enter a restaurant"}
          scenario2={"You're seated at a table"}
          scenario3={"You're ready to order your main meal"}
          scenario4={"You're not happy with your food"}
          scenario5={"Your waiter brings you more food"}
          scenario6={"When you finish your food the waiter comes to your table"}
          scenario7={"You say yes as you are still peckish"}
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
          question2={"How do you order a glass of red wine?"}
          question3={"You decide to order Octopus"}
          question4={"How would you complain when your food is cold??"}
          question5={"You want to tell the waiter it tastes great"}
          question6={"He asks you 'Quieres el postre?'"}
          question7={"How would you ask for Ice Cream?"}
          question8={"How would you ask for the bill?"}
          answer1_1={"Una mesa para cinco, por favor"}
          correctAnswer1={"Una mesa para dos, por favor"}
          answer1_2={"Una silla para dos, por favor "}
          answer1_3={"Una carta para dos, por favor"}
          answer2_1={"Quiero un vaso de agua"}
          correctAnswer2={"Quiero una copa de vino tinto"}
          answer2_2={"Quiero una copa de vino blanco "}
          answer2_3={"Quiero una botella de vino tinto"}
          answer3_1={"Pescado"}
          correctAnswer3={"Pulpo"}
          answer3_2={"Calamar"}
          answer3_3={"Arroz"}
          answer4_1={"Disculpe, la comida está caliente"}
          correctAnswer4={"Disculpe, la comida está fría"}
          answer4_2={"Me encanta la comida"}
          answer4_3={"Disculpe, la sopa está fría"}
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
          answer8_2={"Me puedes traer un vaso, por favor?"}
          answer8_3={"Me puedes traer la carta, por favor?"}
        />
        </div>
      ),

      FrenchScenarios: (
        <LanguageList
          handleFrenchClicked={this.handleFrenchClicked}
          handleSpanishClicked={this.handleSpanishClicked}
          frenchImage={"https://image.ibb.co/hfnxMc/la_frenchflag.png"}
          spanishImage={"https://image.ibb.co/ksvj1c/la_spanishflag.png"}
          frenchScenarios={<Scenarios
            handleScenario1Clicked={this.handleScenario1Clicked}
            handleScenario2Clicked={this.handleScenario2Clicked}
            buttonName1={"Getting around"}
            buttonName2={"Eating out"}
          />}
        />
      ),
      FrenchQuiz: (
       <div>
        <Quiz
         handleResults={this.handleResults}
            storyState={this.state.story}
            handleScenario1Clicked={this.handleScenario1Clicked}
            handleScenario2Clicked={this.handleScenario2Clicked}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You leave your house and start following these signs"}
          scenario2={"You arrive at the train station"}
          scenario3={"You get your ticket"}
          scenario4={"You head for your train"}
          scenario5={"You take the train to your stop. Once you get off, you want to head towards the market so you check your map"}
          scenario6={"You get lost and stop to ask a stranger for directions"}
          scenario7={"The stranger tells you to turn right and go straight"}
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
          question8={"How do you ask how much something costs?"}
          answer1_1={"À l'arrêt de bus"}
          answer1_2={"À la station de métro"}
          correctAnswer1={"À la gare"}
          answer1_3={"À la caserne de pompiers"}
          answer2_1={"Combien coûte un train?"}
          correctAnswer2={"Combien coûte un billet de train?"}
          answer2_2={"Combien coûte une voiture?"}
          answer2_3={"Combien de temps faut-il pour y arriver?"}
          answer3_1={"À quelle heure part le dernier train?"}
          correctAnswer3={"Combien de temps faut-il pour y arriver?"}
          answer3_2={"À quelle heure part le prochain train?"}
          answer3_3={"Combien de trains circulent aujourd'hui?"}
          answer4_1={"La rue 7"}
          correctAnswer4={"Le quai 7"}
          answer4_2={"La chaise 7"}
          answer4_3={"La voiture 7"}
          answer5_1={"Nord"}
          correctAnswer5={"Sud"}
          answer5_2={"Est"}
          answer5_3={"Ouest"}
          answer6_1={"Où est la banque?"}
          correctAnswer6={"Où est le marché?"}
          answer6_2={"Où est le magasin?"}
          answer6_3={"Où est la fleuve?"}
          answer7_1={"Tournez à gauche et continuez tout droit"}
          correctAnswer7={"Tournez à droite et continuez tout droit"}
          answer7_2={"Allez tout droit"}
          answer7_3={"Au bout de la rue"}
          answer8_1={"Quel âge avez-vous?"}
          correctAnswer8={"C'est combien?"}
          answer8_2={"Combien y-a-t-il?"}
          answer8_3={"Combien d'enfants avez-vous?"}

          />
        </div>
      ),

      FrenchQuiz2: (
        <div>
        <Quiz
         handleResults={this.handleResults}
            storyState={this.state.story}
            handleScenario1Clicked={this.handleScenario1Clicked}
            handleScenario2Clicked={this.handleScenario2Clicked}
          handleDataSubmitted = {this.handleDataSubmitted}
          scenario1={"You enter a restaurant"}
          scenario2={"You're seated at a table"}
          scenario3={"You're ready to order your main meal"}
          scenario4={"You're not happy with your food"}
          scenario5={"Your waiter brings you more food"}
          scenario6={"When you finish your food the waiter comes to your table"}
          scenario7={"You say yes as you are still peckish"}
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
          question2={"How do you order a glass of red wine?"}
          question3={"You decide to order Octopus"}
          question4={"How would you complain when your food is cold??"}
          question5={"You want to tell the waiter it tastes great"}
          question6={"He askes you 'Voulez-vous un dessert?'"}
          question7={"How would you ask for Ice Cream?"}
          question8={"How would you ask for the bill?"}
          answer1_1={"Une table pour cinq personnes s'il vous plaît"}
          correctAnswer1={"Une table pour deux personnes s'il vous plaît"}
          answer1_2={"Une chaise pour deux personnes s'il vous plaît"}
          answer1_3={"Une lettre pour deux personnes s'il vous plaît"}
          answer2_1={"J'aimerais un verre d'eau"}
          correctAnswer2={"J'aimerais un verre de vin rouge"}
          answer2_2={"J'aimerais un verre de vin blanc "}
          answer2_3={"J'aimerais une bouteille de vin rouge"}
          answer3_1={"Le poisson"}
          correctAnswer3={"Le poulpe"}
          answer3_2={"Les boulettes de viande"}
          answer3_3={"Le riz"}
          answer4_1={"Excusez-moi, la nourriture est chaude"}
          correctAnswer4={"Excusez-moi, la nourriture est froide"}
          answer4_2={"J'adore la nourriture"}
          answer4_3={"Excusez-moi, la boisson est froide"}
          answer5_1={"C'est cru"}
          correctAnswer5={"C'est délicieux"}
          answer5_2={"C'est trop épicé"}
          answer5_3={"C'est trop salé"}
          answer6_1={"Do you want a drink?"}
          correctAnswer6={"Do you want dessert?"}
          answer6_2={"Do you want fruit?"}
          answer6_3={"Do you want salt"}
          answer7_1={"J'aimerais une serviette"}
          correctAnswer7={"J'aimerais une glace"}
          answer7_2={"J'aimerais un gâteau"}
          answer7_3={"J'aimerais un fruit"}
          answer8_1={"Pourriez-vous m'apporter une fourchette s'il vous plaît?"}
          correctAnswer8={"L'addition s'il vous plaît"}
          answer8_2={"Mon ami règle l'addition"}
          answer8_3={"La lettre s'il vous plaît"}
        />

        </div>
      ),
      LanguageList: (
        <LanguageList
          handleSpanishClicked={this.handleSpanishClicked}
          handleFrenchClicked={this.handleFrenchClicked}
          handleRandomScenario={this.handleRandomScenario}
          spanishImage={"https://image.ibb.co/ksvj1c/la_spanishflag.png"}
          frenchImage={"https://image.ibb.co/hfnxMc/la_frenchflag.png"}
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
