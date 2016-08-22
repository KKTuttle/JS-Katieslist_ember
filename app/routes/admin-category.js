import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    update(category, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined && params[key]!=="") {
          category.set(key,params[key]);
        }
      });
      category.save();
      this.transitionTo('admin-category');
    },
    destroyCategory(category) {
      category.destroyRecord();
      this.transitionTo('admin');
    },
    saveListing(params) {
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      category.get('listings').addObject(newListing);
      newListing.save().then(function() {
        return category.save();
      });
      this.transitionTo('admin-category', params.category);
    }
  }
});
