import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('map', function() {
    this.route('panel', function() {
      this.route('truck', {path: '/:truck_id'});
      this.route('settings');
    });
  });
});

export default Router;
