import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    initialTransition(){
      var params={
        name: this.get('player-name'),
        score:0
      }
      console.log(params);

      this.sendAction('initialTransition',params);
    }
  }
});
