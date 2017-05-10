import Ember from 'ember';

export function lengthOf([array]/*, hash*/) {
  return array ? array.length : 0;
}

export default Ember.Helper.helper(lengthOf);
