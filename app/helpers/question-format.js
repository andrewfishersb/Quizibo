import Ember from 'ember';

export function questionFormat(results) {
  var displayCurrentQuestion = results[0][0];
  var toDisplay = "<p>" + displayCurrentQuestion.question + "</p>" + results[1];
  var answer = null;


  return Ember.String.htmlSafe(toDisplay);
}

export default Ember.Helper.helper(questionFormat);
