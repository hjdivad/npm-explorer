import Ember from 'ember';

export default Ember.Route.extend({
  model({ packageName }) {
    this.controllerFor('application').set('packageName', packageName);

    return fetch(`/api/package/${packageName}`).
      then(response => response.json());
  },
});
