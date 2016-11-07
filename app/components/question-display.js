import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestion: null,
  quizzingNow: false,
  selectedAnswer: null,
  answerOne: null,
  answerTwo: null,
  answerThree: null,
  answerFour: null,
  correctAnswer: null,
  allAnswers: [],
  counter: 0,

  actions:{
    nextQuestion(results){
      this.counter++;
      this.set('currentQuestion', results[this.counter].question);
      var answerSpot = parseInt(this.selectedAnswer);
      if (this.allAnswers[answerSpot] === this.correctAnswer) {
      }
      this.set('correctAnswer', results[this.counter].correct_answer);
      this.set('allAnswers', results[this.counter].incorrect_answers);
      var random = Math.floor(Math.random() * (3 + 1));
      this.allAnswers.splice(random, 0, this.correctAnswer);
      console.log(this.allAnswers[0]);
      this.set('answerOne', this.allAnswers[0]);
      this.set('answerTwo', this.allAnswers[1]);
      this.set('answerThree', this.allAnswers[2]);
      this.set('answerFour', this.allAnswers[3]);
      this.set('selectedAnswer', null);

    },
    startQuiz(results){
      this.set('currentQuestion', results[this.counter].question);
      this.set('quizzingNow', true);
      this.set('correctAnswer', results[0].correct_answer);
      this.set('allAnswers', results[0].incorrect_answers);
      var random = Math.floor(Math.random() * (3 + 1));
      this.allAnswers.splice(random, 0, this.correctAnswer);
      console.log(this.allAnswers[0]);
      this.set('answerOne', this.allAnswers[0]);
      this.set('answerTwo', this.allAnswers[1]);
      this.set('answerThree', this.allAnswers[2]);
      this.set('answerFour', this.allAnswers[3]);
      this.set('selectedAnswer', null);
    },
    test(){
      var random = Math.floor(Math.random() * (2 + 1));
      console.log(random);
    },
    checkAnswer(){
      console.log("checked answer");
    }


  }
});
