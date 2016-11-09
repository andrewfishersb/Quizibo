import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  presidentArray:[],
  guessedArray: [],
  startingQuiz: true,
  quizzingNow: false,
  actions:{
    checkAnswer(results){
      var termArray='{"terms":[]}';
      var obj = JSON.parse(termArray);



      for (var i = 0; i < results.content.length; i++) {
        this.presidentArray.push(results.content[i]._data.name.toLowerCase());
        var curPresidentName = results.content[i]._data.name;
        var curPresidentTerm = results.content[i]._data.term;
        obj['terms'].push({"term":curPresidentTerm,"name":curPresidentName});
      }
      termArray=obj['terms'];
      console.log(termArray);
      var curGuess = this.get('guess');
      if(!this.guessedArray.includes(curGuess)){
        console.log('got here');
        if (this.presidentArray.includes(curGuess.toLowerCase())) {
          this.set('score.quizTotal', 1);
          this.guessedArray.push(curGuess);
          this.get('score').updateTotal();
          console.log(this.guessedArray);
          console.log('that is correct');
          $('#2009-20171').toggle();
          $('#2009-20172').show();
          console.log();
        }
      }
    },
    showQuiz() {
      this.set('quizzingNow', true);
      this.set('startingQuiz', false);
    }
  }
});
