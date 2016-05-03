import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),
  store: Ember.inject.service(),
  model() {
    return this.store.findAll('truck');
  }
});
