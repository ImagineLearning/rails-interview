class StudentsController < ApplicationController

  #GET /students
  def index
    if params[:movie]
      students_table = Student.arel_table
      @students = Student.where(students_table[:favoritemovie].matches("%#{params[:movie]}%"))
      check_first_names(@students)
    elsif params[:name]
      students_table = Student.arel_table
      @students = Student.where(students_table[:firstname].matches("%#{params[:name]}%"))
      check_first_names(@students)
      @students = Student.all if @students.blank?
    else
      @students = Student.all
      check_first_names(@students)
    end

    if request.format == "application/json"
      render json: @students
    else
      @students
    end
  end


  #Used for SPA view rendering
  def js
  end

  #POST /foo
  def create
    if (params.has_key?(:valid) && params[:valid] == 'true')
      render :text => "BAR", :status => 202
    elsif (params.has_key?(:valid) && params[:valid] != 'true')
      raise "Params include a 'valid' key, but that key is not set to true."
    else
      raise "Valid was not passed as a parameter."
    end
  end

  private
    def user_params
      #for strong params in the future
    end

    def check_first_names(students)
      students.each do |s|
        s.name = s.name
      end
    end
end
