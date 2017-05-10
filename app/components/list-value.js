import Ember from 'ember';

const { computed, typeOf } = Ember;

export default Ember.Component.extend({
  value: null,
  tagName: '',

  listComponent: computed('value', function listComponent() {
    let value = this.get('value');
    let type = typeOf(value);

    return `list-${type}`;
  }),
});
