import Ember from 'ember';

export function displayScore(params) {
  console.log(params[0]+1);
  return params[0];
}

export default Ember.Helper.helper(displayScore);
