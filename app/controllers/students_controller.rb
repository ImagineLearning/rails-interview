class StudentsController < ApplicationController
  def index
    @students = Student.search(params[:movie])
  end
end
