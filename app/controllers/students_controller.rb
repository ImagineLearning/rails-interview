class StudentsController < ApplicationController
  def index
    if params[:movie]
      @students = Student.select(:firstname, :lastname, :favoritemovie).where("lower(favoritemovie) = ?", params[:movie].downcase)
    else
      @students = Student.select(:firstname, :lastname, :favoritemovie).all
    end
    @name_count = Student.all.group(:firstname).count
  end
end
