import Ember from 'ember';

const PostIndex = Ember.Component.extend({
  classNames: 'posts-index',
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

export default PostIndex;