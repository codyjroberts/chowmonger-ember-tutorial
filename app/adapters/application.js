import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  host: 'http://localhost:4000',
  namespace: 'api/v1',
  authorizer: 'authorizer:custom'
});
