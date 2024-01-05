class Api::V1::PostsController < ApplicationController
  before_action :set_post, only: %i[show edit update destroy]
  protect_from_forgery
  def index
    post = Post.all.order(created_at: :ASC)
    render json: post
  end

  def create
    post = Post.create!(post_params)
    if post
      render json: post
    else
      render json: post.errors
    end
  end

  def show
    render json: @post
  end

  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors
    end
  end

  def destroy
    Post.find(params[:id]).destroy
    render json: { message: 'Post deleted!' }
  end

  private

  def post_params
    params.permit(:title, :post_content)
  end

  def set_post
    @post = Post.find(params[:id])
  end
end