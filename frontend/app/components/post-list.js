import Ember from 'ember';

const PostListCompontent = Ember.Component.extend({
  newPostText: null,

  isCreatingPost: false,

  actions: {
    createPost() {
      this.set('isCreatingPost', true);
    },

    savePost() {
      this.set('isCreatingPost', false)
      this.sendAction('savePost', this.get('newPostText'))
      this.set('newPostText', '');
    }
  }
});

export default PostListCompontent;