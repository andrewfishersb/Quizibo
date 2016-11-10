import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),

  model(){
    var url = "https://www.opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple";
    return Ember.$.getJSON(url).then(function(responseJSON){
      return responseJSON.results;
    });
  },
  actions: {
    transitionToNew(categories){
      if(categories.length===0){
        this.transitionTo('index');
      }else{
        var newRoute = this.get('transition').remove();
        console.log(categories);
        this.transitionTo(newRoute);
      }

    }
  }
});
