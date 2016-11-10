import Ember from 'ember';


export default Ember.Route.extend({
  transition: Ember.inject.service(),
  startQuiz:true,
  model(){
    return this.store.findAll('player');
  },
  actions: {
    initialTransition(){
      this.set("startQuiz",false);
      var newRoute = this.get('transition').remove();
      this.transitionTo(newRoute);
    }
  }
});
