import Ember from 'ember';

export default Ember.Component.extend({
  score: Ember.inject.service(),
  transition: Ember.inject.service(),

  presidentArray:[],
  guessedArray: [],
  startQuiz: true,
  quizzingNow: false,
  correctCounter: 0,
  actions:{
    startQuiz(results){
      this.set('quizzingNow', true);
      this.set('startQuiz', false);
      //timer start
      var timer = 120;
      var timerHere;
      var stepTime = function(){
        if (timer === 0){
          clearInterval(timerHere);
        } else {
          timer--;
          $("#presidentTimer").text(timer + " seconds");
          $('.presidentTimerDisplay').show();
        }
      };
      var startTime = function(){
        timerHere = setInterval(stepTime, 1000);
      }
      startTime();
      this.noTime = Ember.run.later(this, function() {
        $('.shown').show();
        $('#presiDoneButton').show();
        $('.inputDiv').hide();
        $('.notShown').hide();
      }, 120000);
    },
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
      var curGuess = this.get('guess').toLowerCase();
      this.set('guess','');
        if (this.presidentArray.includes(curGuess)) {
          var index= this.presidentArray.indexOf(curGuess);
          if(curGuess==='grover cleveland'){
            $('#' + termArray[index].term + '1').toggle();
            $('#' + termArray[index+2].term + '1').toggle();
            $('#' + termArray[index].term + '2').show();
            $('#' + termArray[index+2].term + '2').show();
            this.guessedArray.push(curGuess);
          }else{
            this.guessedArray.push(curGuess);
            $('#' + termArray[index].term + '1').toggle();
            $('#' + termArray[index].term + '2').show();
            this.correctCounter++;
            this.set('score.quizTotal', this.correctCounter);
          }
        }
      },
    transitionToNew(categories){
      this.get('score').scoreCashout();
      this.sendAction('transitionToNew',categories);
    }
  }
});
