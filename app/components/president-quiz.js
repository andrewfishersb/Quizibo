import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  presidentArray:[],
  guessedArray: [],
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
      var curGuess = this.get('guess').toLowerCase();
      this.set('guess','');
      if(!this.guessedArray.includes(curGuess)){
        console.log('got here');
        if (this.presidentArray.includes(curGuess)) {
          var index= this.presidentArray.indexOf(curGuess);
          if(curGuess==='grover cleveland'){
            $('#' + termArray[index].term + '1').toggle();
            $('#' + termArray[index].term + '2').show();
            $('#' + termArray[index+2].term + '1').toggle();
            $('#' + termArray[index+2].term + '2').show();
          }
          this.guessedArray.push(curGuess);
          $('#' + termArray[index].term + '1').toggle();
          $('#' + termArray[index].term + '2').show();
          this.set('score.quizTotal', 1);
          this.get('score').updateTotal();
        }
      }

    },
  }
});
