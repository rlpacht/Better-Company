import Ember from 'ember';

const PostListCompontent = Ember.Component.extend({
  classNames: 'post-list',
  
  postsSort: ['createdAt:desc'],

  sortedPosts: Ember.computed.sort('posts', 'postsSort'),

  
});

export default PostListCompontent;