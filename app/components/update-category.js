import Ember from 'ember';

export default Ember.Component.extend({
  updateCategory:false,
  actions: {
    updateCategoryForm() {
      this.set('updateCategory', true);
    },
    update(category) {
      console.log("cat-upd");
      var params = {
        name: this.get('name'),
      };
      this.set('updateCategory', false);
      this.sendAction('update', category, params);
    },
    deleteCategory(category) {
      if (confirm('Are you sure you want to delete this category?')) {
        this.sendAction('destroyCategory', category);
      }
    }
  }
});
