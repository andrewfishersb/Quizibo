import Ember from 'ember';


export default Ember.Route.extend({
  transition: Ember.inject.service(),
  actions: {
    initialTransition(){
      var newRoute = this.get('transition').remove();
      this.transitionTo(newRoute);
    }
  }
});
