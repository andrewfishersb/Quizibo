import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  quizzingNow: false,
  currentQuestion: null,
  counter: 0,
  correctCounter: 0,
  actions:{
    startQuiz(results){
      this.set('quizzingNow', true);
      this.set('currentQuestion', results.content[this.counter]._data.image);
    },
    nextQuestion(results){
      var answer = this.get('answer');
      this.set('answer', "");
      answer = answer.toLowerCase();
      console.log(answer);
      if (answer === results.content[this.counter]._data.artist) {
        this.correctCounter++;
        this.set('score.totalScore', this.correctCounter);
      }
      this.counter++;
      this.set('currentQuestion', results.content[this.counter]._data.image);
    }
  }
});
