import Ember from 'ember';

export default Ember.Service.extend({
  // categories: ['art','computer-quiz','movie','president'],
  categories: ['art','computer-quiz','movie'],


  remove(){
    var randIndex = Math.floor(Math.random()*this.categories.length);
    var switchTo = this.categories.splice(randIndex,1);
    return switchTo[0];
  }
});
