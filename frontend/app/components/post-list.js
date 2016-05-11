import Ember from 'ember';

const PostListCompontent = Ember.Component.extend({
  isCreatingPost: false;
  actions: {
    createPost() {
      this.set("isCreatingPost", true);
    },
    savePost() {
      this.set("isCreatingPost", false)
    }
  }
});

export default PostListCompontent;