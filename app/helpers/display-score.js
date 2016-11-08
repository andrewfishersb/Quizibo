import Ember from 'ember';

export function displayScore(params) {
  return params[0];
}

export default Ember.Helper.helper(displayScore);
