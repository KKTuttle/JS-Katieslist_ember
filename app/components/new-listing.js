import Ember from 'ember';

export default Ember.Component.extend({
  addNewListing: false,
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    saveListing() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        image: this.get('image'),
        note: this.get('note'),
        category: this.get('category'),
      };
      this.set('addNewListing', false);
      this.sendAction('saveListing', params);
    }
  }
});
