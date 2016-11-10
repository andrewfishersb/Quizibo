import Ember from 'ember';

export default Ember.Component.extend({
  gameStarted: false,
  actions:{
    initialTransition(){
      var params={
        name: this.get('player-name'),
        score:0
      }
      this.set('gameStarted',true);
      console.log(params);

      this.sendAction('initialTransition',params);
    }
  }
});
