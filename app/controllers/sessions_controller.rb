class SessionsController < ApplicationController
  def new
    @user = User.new()  
    render :new
  end

  def create
    user_params = params.require(:user).permit(:email, :password)
    @user = User.confirm(user_params)
    if @user
      login(@user)
      redirect_to "/posts"
    else
      head 403
    end

  end

  def destroy
    logout
    @user = User.new()

    redirect_to :action => :new, status: 303
  end
end
