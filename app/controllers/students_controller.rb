class StudentsController < ApplicationController
  def index
    #TODO: ANDREW use pagination to avoid pulling all students at once
    @students = Student.all
  end
end
