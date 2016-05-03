import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  name: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  image: DS.attr(),
  menu: DS.attr('array'),
  categories: DS.attr('array'),
  status: DS.attr(),
  user: DS.belongsTo('truck'),
  address: null,

  addressChanged: Ember.on('init', Ember.observer('lat', 'lng', function() {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.get('lat')},${this.get('lng')}&key=AIzaSyAynQTnvqd6_PdtsnUJ-nO1nBzn2aJqbws`;
    var self = this;

    new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax(url, {
        success: function(response) {
          resolve(response.results[0].formatted_address);
        },
        error: function(reason) {
          reject(reason);
        }
      });
    }).then(function(response) {
      self.set('address', response);
    });

    return "calculating...";
  }))
});
