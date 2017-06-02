class StudentsController < ApplicationController

  #GET /students
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


  #Used for SPA view rendering
  def js
  end

  #POST /foo
  def create
  p params
  p params[:valid]
  p params['valid']
    if (params.has_key?(:valid) && params[:valid] == 'true')
      render :text => "BAR", :status => 202
    elsif (params.has_key?(:valid) && params[:valid] != 'true')
      raise "Params include a 'valid' key, but that key is not set to true."
    else
      raise "Valid was not passed as a parameter."
    end
  end
end
