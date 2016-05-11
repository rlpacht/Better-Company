import DS from 'ember-data';

const PostModel = DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
  user_id: DS.attr('number'), 
});

export default PostModel;