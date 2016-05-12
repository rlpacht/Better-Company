class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :description
end
