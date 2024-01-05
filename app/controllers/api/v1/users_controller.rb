class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: %i[show edit update destroy]
  protect_from_forgery
  def index
    user = User.all.order(created_at: :ASC)
    render json: user
  end

  def create
    user = User.create!(user_params)
    if user
      render json: user
    else
      render json: user.errors
    end
  end

  def show
    render json: @user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors
    end
  end

  def destroy
    User.find(params[:id]).destroy
    render json: { message: 'Recipe deleted!' }
  end

  private

  def user_params
    params.permit(:username, :password)
  end

  def set_user
    @user = User.find(params[:id])
  end
end
