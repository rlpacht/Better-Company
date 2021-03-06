import DS from 'ember-data';

const PostModel = DS.Model.extend({
  text: DS.attr('string'),
  user: DS.belongsTo('user'),
  createdAt: DS.attr('date')
});

export default PostModel;