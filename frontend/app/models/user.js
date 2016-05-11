import DS from 'ember-data';

const UserModel = DS.Model.extend({
  email: DS.attr("string"),
  description: DS.attr("string"),
});

export default UserModel;