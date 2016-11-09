import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),
  model(){
    return this.store.findAll('movie');
  },
  actions: {
    transitionToNew(){
      var newRoute = this.get('transition').remove();
      this.transitionTo(newRoute);
    }
  }
});
