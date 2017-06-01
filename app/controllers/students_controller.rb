class StudentsController < ApplicationController
  def index
    #TODO: ANDREW use pagination to avoid pulling all students at once
    if params[:movie]
      students_table = Student.arel_table
      @students = Student.where(students_table[:favoritemovie].matches("%#{params[:movie]}%"))
    else
      @students = Student.all
    end
  end
end
