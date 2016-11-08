import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  currentQuestion: null,
  startingQuiz: true,
  quizzingNow: false,
  quizDone:  false,
  selectedAnswer: null,
  answerOne: null,
  answerTwo: null,
  answerThree: null,
  answerFour: null,
  correctAnswer: null,
  allAnswers: [],
  counter: 0,
  correctCounter: 0,

  actions:{
    nextQuestion(results){
      var answerSpot;
      if(this.counter===9){
        this.set('quizzingNow', false);
        this.set('quizDone',true);
        answerSpot = parseInt(this.selectedAnswer);
        if (this.allAnswers[answerSpot] === this.correctAnswer) {
          this.correctCounter++;
          this.set('score.totalScore', this.correctCounter);
        }
      }else{
        this.counter++;
        this.set('currentQuestion', results[this.counter].question);
        answerSpot = parseInt(this.selectedAnswer);
        if (this.allAnswers[answerSpot] === this.correctAnswer) {
          this.correctCounter++;
          this.set('score.totalScore', this.correctCounter);
        }
        this.set('correctAnswer', results[this.counter].correct_answer);
        this.set('allAnswers', results[this.counter].incorrect_answers);
        var random = Math.floor(Math.random() * (3 + 1));
        this.allAnswers.splice(random, 0, this.correctAnswer);
        this.set('answerOne', this.allAnswers[0]);
        this.set('answerTwo', this.allAnswers[1]);
        this.set('answerThree', this.allAnswers[2]);
        this.set('answerFour', this.allAnswers[3]);
        this.set('selectedAnswer', null);
      }
    },
    startQuiz(results){
      this.set('currentQuestion', results[this.counter].question);
      this.set('startingQuiz', false);
      this.set('quizzingNow', true);
      this.set('correctAnswer', results[0].correct_answer);
      this.set('allAnswers', results[0].incorrect_answers);
      var random = Math.floor(Math.random() * (3 + 1));
      this.allAnswers.splice(random, 0, this.correctAnswer);
      this.set('answerOne', this.allAnswers[0]);
      this.set('answerTwo', this.allAnswers[1]);
      this.set('answerThree', this.allAnswers[2]);
      this.set('answerFour', this.allAnswers[3]);
      this.set('selectedAnswer', null);
    },
    transitionToNew(){
      this.sendAction('transitionToNew');
    }
  }
});
