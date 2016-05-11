import Ember from 'ember';

const UserRoute = Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  }
});

export default UserRoute;