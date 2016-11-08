import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),

  model(){
    var url = "https://www.opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    return Ember.$.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.results);
      return responseJSON.results;
    });
  },
  actions: {
    transitionToNew(){
      var newRoute = this.get('transition').remove();
      this.transitionTo(newRoute);
      console.log(this.get('transition').categories)
    }
  }
});
