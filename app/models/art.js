import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  image: DS.attr(),
});
