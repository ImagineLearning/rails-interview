class Student < ActiveRecord::Base
  attr_writer :name

  #TODO: ANDREW add validations

  #allows passing attributes through to the view without persisting to database (useful for name)
  def attributes
    super.merge('name' => self.name)
  end

  def Student.repeated_firstnames
    Student.select(:firstname).group(:firstname).having("count(*) > 1").map {|student| student.firstname}
  end

  def name
    self.firstname + (Student.repeated_firstnames.include?(self.firstname) ? ' ' + self.lastname[0] + '.' : '')
  end

  def movie
    self.favoritemovie
  end
end
