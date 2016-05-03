import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),
  store: Ember.inject.service(),
  socket: Ember.inject.service(),
  model() {
    return this.store.findAll('truck');
  },
  afterModel() {
    const chan = this.get('socket').joinChannel("trucks");

    chan.on("change", (payload) => {
      this.get('store').findRecord('truck', payload.id, {reload: true});
    });
  }
});
