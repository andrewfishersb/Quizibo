import Ember from 'ember';


export default Ember.Route.extend({
  transition: Ember.inject.service(),
  gameOver:false,
  model(){
    return this.store.findAll('player');
  },
  actions: {
    initialTransition(){
      var newRoute = this.get('transition').remove();
      this.transitionTo(newRoute);
    }
  }
});
