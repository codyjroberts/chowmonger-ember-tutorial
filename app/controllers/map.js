import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),
  lat: 41.881832,
  lng: -87.623177,
  zoom: 14,
  actions: {
    viewTruck(id) {
      this.transitionToRoute('map.panel.truck', id);
    }
  }
});
