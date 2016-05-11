class Api::PostsController < ApplicationController
  def index
    posts = Post.all
    render :json => posts
  end

  def create
    new_post = params.require(:post).permit(:text, :author);
    post = Post.create(new_post)
    render :json => post
  end
end
