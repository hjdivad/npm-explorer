import Ember from 'ember';

export function keysFor([obj]/*, hash*/) {
  if (!obj) {
    return [];
  }

  return Object.keys(obj);
}

export default Ember.Helper.helper(keysFor);
