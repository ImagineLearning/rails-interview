class StudentsController < ApplicationController
  def index
    if params[:movie]
      students_table = Student.arel_table
      @students = Student.where(students_table[:favoritemovie].matches("%#{params[:movie]}%"))
      if request.headers["Content-Type"] == "application/json"
        render json: @students
      else
        @students
      end
    else
      #TODO: ANDREW use pagination to avoid pulling all students at once
      @students = Student.all
      if request.headers["Content-Type"] == "application/json"
        render json: @students
      else
        @students
      end
    end
  end


  def js
    if params[:movie]
      students_table = Student.arel_table
      @students = Student.where(students_table[:favoritemovie].matches("%#{params[:movie]}%"))
      if request.headers["Content-Type"] == "application/json"
        render json: @students
      else
        @students
      end
    else
      #TODO: ANDREW use pagination to avoid pulling all students at once
      @students = Student.all
      if request.headers["Content-Type"] == "application/json"
        render json: @students
      else
        @students
      end
    end
  end
end
