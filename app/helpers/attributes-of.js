import Ember from 'ember';

const { get } = Ember;

export function attributesOf([model]/*, hash*/) {
  if (!model) {
    return {};
  }

  let attrs = {};
  model.eachAttribute(a => attrs[a] = get(model, a));
  return attrs;
}

export default Ember.Helper.helper(attributesOf);
