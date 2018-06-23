class StudentsController < ApplicationController
  def index
    @students = Student.search(params[:movie])
  end

  def js

  end
end
