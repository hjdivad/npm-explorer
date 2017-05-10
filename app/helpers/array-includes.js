import Ember from 'ember';

export function arrayIncludes([array, value]/*, hash*/) {
  return array.includes(value);
}

export default Ember.Helper.helper(arrayIncludes);
