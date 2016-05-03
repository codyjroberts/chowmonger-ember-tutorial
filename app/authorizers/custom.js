import Ember from 'ember';
import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  session: Ember.inject.service(),
  authorize(jqXHR, requestOptions) {
    var accessToken = this.get('session.data.authenticated.token');
    if (this.get('session.isAuthenticated') && !Ember.isEmpty(accessToken)) {
      requestOptions('Authorization', 'Bearer ' + accessToken);
    }
  }
});
