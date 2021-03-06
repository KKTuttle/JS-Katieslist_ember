import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  note: DS.attr(),
  category: DS.belongsTo('category', {async:true})
});
