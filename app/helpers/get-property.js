import Ember from 'ember';

export function getProperty([object, propertyName]/*, hash*/) {
  if (!object || !propertyName) {
    return;
  }

  return object[propertyName];
}

export default Ember.Helper.helper(getProperty);
