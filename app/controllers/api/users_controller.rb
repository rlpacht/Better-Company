class Api::UsersController < ApplicationController
  def show
    id = params[:id]
    user = User.find(id)
    render :json => user
  end
end
