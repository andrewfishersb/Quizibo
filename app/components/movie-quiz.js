import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  quizzingNow: false,
  currentQuestion: null,
  counter: 0,
  correctCounter: 0,
  areResultsShowing: false,
  actions:{
    startQuiz(results){
      this.set('quizzingNow', true);
      this.set('currentQuestion', results.content[this.counter]._data.image);
    },
    nextQuestion(results){
      var answer = this.get('answer');
      this.set('answer', "");
      answer = answer.toLowerCase();
      var answer2 = results.content[this.counter]._data.title;
      answer2 = answer2.toLowerCase();
      if (answer === answer2) {
        this.correctCounter++;
        this.set('score.totalScore', this.correctCounter);
      }
      if(this.counter<10) {
      this.counter++;
      this.set('currentQuestion', results.content[this.counter]._data.image);
    } else {
        this.set('areResultsShowing', true)
      }
    }
  }
});
