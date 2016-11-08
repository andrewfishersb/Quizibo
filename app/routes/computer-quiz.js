import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    var url = "https://www.opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  }
});
