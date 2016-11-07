import Ember from 'ember';


export default Ember.Route.extend({
  actions: {
  charLookup(params) {
      this.transitionTo('comicresults', params.name);
    }
  }
});
