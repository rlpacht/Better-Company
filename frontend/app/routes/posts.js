import Ember from 'ember';

const PostRoute = Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  },

  actions: {
    savePost(text) {
      const newPost = this.store.createRecord('post', {
        text: text
      });
      newPost.save();
    },
  }

});

export default PostRoute;