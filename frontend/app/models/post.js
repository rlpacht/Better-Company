import DS from 'ember-data';

const PostModel = DS.Model.extend({
  text: DS.attr('string'),
  author: DS.attr('string'),
});

export default PostModel;