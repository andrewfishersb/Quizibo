import Ember from 'ember';

export default Ember.Service.extend({
  totalScore: 0,
  quizTotal: 0,

  scoreCashout(){
    this.set('totalScore',this.totalScore + this.quizTotal);
    this.set('quizTotal', 0);
  }
});
