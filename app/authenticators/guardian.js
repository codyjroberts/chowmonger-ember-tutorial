import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise((resolve, reject) => {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate(options) {
    let session = {
      "data": {
        "attributes": {
          "email": options.identification,
          "password": options.password
        }
      }
    };

    return new Ember.RSVP.Promise((resolve, reject) => {
        Ember.$.ajax({
          url: 'http://localhost:4000/api/v1/token',
          headers: {
            accept: 'application/vnd.api+json'
          },
          contentType: 'application/vnd.api+json',
          crossDomain: true,
          type: 'POST',
          data: JSON.stringify(session)
        }).then(function(response) {
          Ember.run(function() {
            resolve({
              token: response.data.attributes.jwt,
              id: response.data.attributes.id
            });
          });
        }, function(xhr, status, error) {
          var response = xhr.responseText;
          Ember.run(function() {
            reject(response);
          });
        });
    });
  },
  invalidate() {
    return Ember.RSVP.resolve();
  }
});
