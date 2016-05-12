class Api::PostsController < ApplicationController
  def index
    posts = Post.all
    render :json => posts
  end

  def create 
    new_post = params.require(:post).permit(:text)
    post = Post.create({
      :text => new_post["text"], 
      :user_id => current_user.id
    })
    render :json => post
  end
end
