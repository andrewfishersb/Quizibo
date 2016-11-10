import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  transition: Ember.inject.service(),
  quizzingNow: false,
  areResultsShowing: false,
  startingQuiz: true,
  currentQuestion: null,
  counter: 0,
  correctCounter: 0,

  actions:{
    startQuiz(results){
      this.set('quizzingNow', true);
      this.set('startingQuiz', false);
      this.set('currentQuestion', results.content[this.counter]._data.image);
      //timer start
      var timer = 90;
      var timerHere;
      var stepTime = function(){
        if (timer === 0){
          clearInterval(timerHere);
        } else {
          timer--;
          $("#artTimer").text(timer + " seconds");
          $('.artTimerDisplay').show();
        }
      };
      var startTime = function(){

        timerHere = setInterval(stepTime, 1000);
      }
      startTime();
      this.noTime = Ember.run.later(this, function() {
        this.set('areResultsShowing', true);
        this.set('quizzingNow', false);
      }, 90000);
    },
    nextQuestion(results){
      var answer = this.get('answer');
      this.set('answer', "");
      answer = answer.toLowerCase();
      var answer2 = results.content[this.counter]._data.artist;
      answer2 = answer2.toLowerCase();
      if (answer === answer2) {
        this.correctCounter++;
        this.set('score.quizTotal', this.correctCounter);
      }
      if(this.counter<10) {
      Ember.run.cancel(this.noTime);
      this.counter++;
      this.set('currentQuestion', results.content[this.counter]._data.image);
    } else {
        this.set('areResultsShowing', true);
        this.set('quizzingNow', false);
      }
    },

    transitionToNew(categories){
      this.get('score').scoreCashout();
      this.sendAction('transitionToNew',categories);

    }
  }
});
