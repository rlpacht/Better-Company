class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    user_params = params.require(:user).permit(:email, :password, :description)
    @user = User.create(user_params)
    login(@user)
    redirect_to "/posts"
  end
end
    