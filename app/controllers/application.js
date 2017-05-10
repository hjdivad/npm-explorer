import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchPackage(packageName) {
      this.transitionToRoute('package', packageName);
    },
  }
});
