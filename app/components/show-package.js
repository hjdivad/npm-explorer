import Ember from 'ember';

const { computed } = Ember;

let id = 0;

export default Ember.Component.extend({
  // ----------------------------------------------------------------------
  // API

  package: null,

  // ----------------------------------------------------------------------
  // Private

  init() {
    this._super(...arguments);

    this.expandedVersions = [];
  },

  sortedVersionNumbers: computed('package.versions', function sortedVersionNumbers() {
    return Object.keys(this.get('package.versions')).sort().reverse();
  }),

  actions: {
    toggleVersion(versionNumber) {
      let expandedVersions = this.expandedVersions.slice();

      let index = expandedVersions.indexOf(versionNumber);
      if (index > -1) {
        expandedVersions.splice(index, 1);
      } else {
        expandedVersions.push(versionNumber);
      }

      console.log('expandedVersions', expandedVersions);
      this.set('expandedVersions', expandedVersions);
    },
  }
});
