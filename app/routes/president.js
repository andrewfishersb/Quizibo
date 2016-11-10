import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),
  score: Ember.inject.service(),
  model(){
      return this.store.findAll('president');
  },

  actions:{
    transitionToNew(categories){
      if(categories.length===0){
        alert('Your total score is: ' + this.get('score').totalScore)
        this.transitionTo('index');

      }else{
        var newRoute = this.get('transition').remove();
        this.transitionTo(newRoute);
      }
    }
  }

});
