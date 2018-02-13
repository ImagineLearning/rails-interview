class StudentsController < ApplicationController
  # Assuming the POST request will be coming from outside the app
  skip_before_filter :verify_authenticity_token, :only => [:foo]

  def index
    if params[:movie]
      @students = Student.select(:firstname, :lastname, :favoritemovie).where("lower(favoritemovie) = ?", params[:movie].downcase)
    else
      @students = Student.select(:firstname, :lastname, :favoritemovie).all
    end
    @name_count = Student.all.group(:firstname).count

    respond_to do |format|
      format.html {render :index}
      format.json {render json: {students: @students, name_count: @name_count}}
    end
  end

  def js
  end

  def foo
    if params[:valid] == "true"
      render body: "BAR", status: 202
    else
      raise "Missing Valid Parameter"
    end
  end
end
