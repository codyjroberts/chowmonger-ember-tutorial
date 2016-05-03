import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('truck', params.truck_id);
  },
  actions: {
    focused() {
      this.transitionTo('map.panel');
    }
  },
  didInsertElement() {
    this.controllerFor('map.panel').set('name', "");
  }
});
