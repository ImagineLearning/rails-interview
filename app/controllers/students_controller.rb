class StudentsController < ApplicationController
  def index
    if params[:movie]
      students_table = Student.arel_table
      @students = Student.where(students_table[:favoritemovie].matches("%#{params[:movie]}%"))
      @students.each do |s|
        s.name = s.name
      end
      if request.format == "application/json"
        render json: @students
      else
        @students
      end
    elsif params[:name]
      students_table = Student.arel_table
      @students = Student.where(students_table[:firstname].matches("%#{params[:name]}%"))
      @students.each do |s|
        s.name = s.name
      end
      if request.format == "application/json"
        render json: @students
      else
        @students
      end
    else
      #TODO: ANDREW use pagination to avoid pulling all students at once
      @students = Student.all
      @students.each do |s|
        s.name = s.name
      end
      if request.format == "application/json"
        render json: @students
      else
        @students
      end
    end
  end


  def js
  end
end
