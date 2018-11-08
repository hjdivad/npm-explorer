export default class ApplicationSerializer {
  static create() {
    return new ApplicationSerializer(...arguments);
  }

  normalizeResponse(store, model, payload /*, id, requestType */) {
    return payload;
  }
}
