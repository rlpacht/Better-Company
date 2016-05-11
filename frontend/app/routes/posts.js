import Ember from 'ember';

const PostRoute = Ember.Route.extend({
  model() {
    return this.store.findAll('post');
  }
});

export default PostRoute;