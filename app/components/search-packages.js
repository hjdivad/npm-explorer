import Ember from 'ember';

export default Ember.Component.extend({
  value: null,

  actions: {
    updatePackageName(packageName) {
      this.set('value', packageName);
    },
  }
});
