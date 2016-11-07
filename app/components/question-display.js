import Ember from 'ember';

export default Ember.Component.extend({
  currentQuestion: 0,
  actions:{
    nextQuestion(){
      var testQ = this.currentQuestion+1;

      this.set('currentQuestion', testQ)
    }
  }
});
