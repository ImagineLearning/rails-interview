class Student < ActiveRecord::Base
  def name
    self.firstname
  end

  def movie
    self.favoritemovie
  end
end
