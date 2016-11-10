import Ember from 'ember';

export default Ember.Route.extend({
  transition: Ember.inject.service(),
  model(){
      return this.store.findAll('president');
  },

  actions:{
    transitionToNew(categories){
      if(categories.length===0){
        this.transitionTo('index');
      }else{
        var newRoute = this.get('transition').remove();
        this.transitionTo(newRoute);
      }
    }
  }

});
