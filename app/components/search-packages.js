import Ember from 'ember';

export default Ember.Component.extend({
  value: null,

  actions: {
    updatePackageName(packageName) {
      console.log('wat');
      this.set('value', packageName);
    },
  }
});
