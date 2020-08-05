class UsersController < ApplicationController

  def index 
    @users = User.all 
    render json: @users
  end 

  def new 
    @user = User.new 
  end 

  def show 
    @user = User.find(params[:id])
    render json: @user 
  end 

  def create 
    @user = User.create(user_params)

    if @user.valid?
      @user.save
      redirect_to user_path(@user)
    else 
      render :new 
      @user.errors 
    end 
      redirect_to "http://localhost:3001/index.html"
  end 

  private

  def user_params 
    params.require(:user).permit(:first_name, :last_name, :email, :password)
  end 

end
