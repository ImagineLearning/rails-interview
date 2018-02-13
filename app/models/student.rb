class Student < ActiveRecord::Base
  def name
    self.firstname
  end

  def last_initial
    self.lastname[0] + "."
  end

  def movie
    self.favoritemovie
  end
end
