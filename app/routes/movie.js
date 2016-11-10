import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),
  model(){
    return this.store.findAll('movie');
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
