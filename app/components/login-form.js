import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('session-account'),
  actions: {
    authenticate() {
      const credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:guardian', credentials)
        .catch((reason) => {
          alert(reason);
        });
    },
    invalidateSession() {
      this.get('session').invalidate();
    }
  }
});
