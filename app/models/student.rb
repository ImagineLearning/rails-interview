class Student < ActiveRecord::Base
  attr_accessor :favoritemovie
  alias_attribute :movie, :favoritemovie

  #TODO: ANDREW add validations

  def Student.repeated_firstnames
    Student.select(:firstname).group(:firstname).having("count(*) > 1").map {|student| student.firstname}
  end

  def name
    self.firstname + (Student.repeated_firstnames.include?(self.firstname) ? ' ' + self.lastname[0] + '.' : '')
  end
end
