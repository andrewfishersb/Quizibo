import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),
  score: Ember.inject.service(),
  model(){
    var url = "https://www.opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },
  actions: {
    transitionToNew(categories){
      if(categories.length===0){
        alert('Your total score is: ' + this.get('score').totalScore)
        this.transitionTo('index');
      }else{
        var newRoute = this.get('transition').remove();
        console.log(categories);
        this.transitionTo(newRoute);
      }

    }
  }
});
