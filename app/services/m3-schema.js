import DefaultSchema from 'ember-m3/services/m3-schema';

export default class AppSchema extends DefaultSchema {
  includesModel() {
    return true;
  }
}
