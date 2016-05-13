import Ember from 'ember';

const PostListCompontent = Ember.Component.extend({
  postsSort: ['createdAt:desc'],

  sortedPosts: Ember.computed.sort('posts', 'postsSort'),

  newPostText: null,

  isCreatingPost: false,

  actions: {
    createPost() {
      this.set('isCreatingPost', true);
    },

    cancelPosting() {
      this.set('isCreatingPost', false);
      this.set('newPostText', '');
    },

    savePost() {
      this.set('isCreatingPost', false)
      this.sendAction('savePost', this.get('newPostText'))
      this.set('newPostText', '');
    }
  }
});

export default PostListCompontent;