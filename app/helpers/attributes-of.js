import Ember from 'ember';

export function keysOf([model]/*, hash*/) {
  if (!model) {
    return [];
  }

  let attrs = [];
  model.eachAttribute(a => attrs.push(a));
  return attrs;
}

export default Ember.Helper.helper(keysOf);
