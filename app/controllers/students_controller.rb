class StudentsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :just_checking

  def index
    @students = Student.search(params[:movie])
  end

  def js

  end

  def just_checking
    if params[:valid] == 'true'
      render text: 'BAR', status: :accepted
    else
      raise 'Kablooey! Sorry, this is not a valid request.'
    end
  end
end
