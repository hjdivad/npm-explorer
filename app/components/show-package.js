import Ember from 'ember';

const { computed } = Ember;

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

  githubURL: computed('package.repository.url', function githubURL() {
    let repoURL = this.get('package.repository.url');
    if (!/https?:\/\/github.com/.test(repoURL)) {
      return;
    }

    return repoURL.replace(/^git\+/, '').replace(/\.git$/, '')
  }),

  githubRepoName: computed('package.repository.url', function githubRepoName() {
    let repoURL = this.get('package.repository.url');
    if (!/https?:\/\/github.com/.test(repoURL)) {
      return;
    }

    return repoURL.replace(/^(git\+)?https?:\/\/github.com\//, '').replace(/\.git$/, '')
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

      this.set('expandedVersions', expandedVersions);
    },
  }
});
