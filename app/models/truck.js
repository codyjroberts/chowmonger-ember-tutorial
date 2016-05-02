import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  lat: DS.attr(),
  lng: DS.attr(),
  image: DS.attr(),
  menu: DS.attr('array'),
  categories: DS.attr('array'),
  status: DS.attr()
});
