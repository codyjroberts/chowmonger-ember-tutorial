import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    name: {
      refreshModel: true,
      replace: true
    }
  },
  model(params) {
    if (params.name === "" || params.name === undefined) {
      return null;
    }
    else {
      return this.store.query('truck', { name: params.name });
    }
  },
  actions: {
    focused() {
      this.transitionTo('map.panel');
    },
    clearName() {
      var search = this.controllerFor('map.panel').get("name");

      if (search === "") {
        this.transitionTo('map');
      } else {
        this.controllerFor('map.panel').set("name", "");
        Ember.$('#sb').focus();
      }
    }
  }
});
