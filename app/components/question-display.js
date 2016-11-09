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
  currentTime: 120,
  noTime:null,

  actions:{
    nextQuestion(results){
      var answerSpot;
      if(this.counter===9){
        Ember.run.cancel(this.noTime);
        this.set('quizzingNow', false);
        this.set('quizDone',true);
        answerSpot = parseInt(this.selectedAnswer);
        if (this.allAnswers[answerSpot] === this.correctAnswer) {
          this.correctCounter++;
          this.set('score.quizTotal', this.correctCounter);
        }
      }else{
        this.counter++;
        this.set('currentQuestion', results[this.counter].question);
        answerSpot = parseInt(this.selectedAnswer);
        if (this.allAnswers[answerSpot] === this.correctAnswer) {
          this.correctCounter++;
          this.set('score.quizTotal', this.correctCounter);
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
      //timer start
      var timer = 120;
      var timerHere;
      var stepTime = function(){
        if (timer === 0){
          clearInterval(timerHere);
        } else {
          timer--;
          $("#timer").text(timer + " seconds");
          $('.timerDisplay').show();
        }
      };
      var startTime = function(){

        timerHere = setInterval(stepTime, 1000);
      }
      startTime();
      this.noTime = Ember.run.later(this, function() {
        this.set('quizDone', true);
        this.set('quizzingNow', false);
      }, 120000);
      //timer end
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
      this.get('score').scoreCashout();
      this.sendAction('transitionToNew');
    }
  }
});
