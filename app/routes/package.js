import Ember from 'ember';

export default Ember.Route.extend({
  model({ packageName }) {
    this.controllerFor('application').set('packageName', packageName);

    return this.store.queryURL( `/api/package/${packageName}`);
  },
});
