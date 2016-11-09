import Ember from 'ember';


export default Ember.Route.extend({
  transition: Ember.inject.service(),
  actions: {
    initialTransition(){
      var newPlayer = this.store.createRecord('rental', params);
      newRental.save();
      var newRoute = this.get('transition').remove();
      this.transitionTo(newRoute);
    }
  }
});
