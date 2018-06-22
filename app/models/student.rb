class Student < ActiveRecord::Base
  def lastinitial
    "#{lastname[0]}."
  end

  def name
    name = []
    name << firstname
    name << lastinitial if Student.where(firstname: firstname).count > 1
    return name.join(' ')
  end

  def self.search(query)
    if query.present?
      where('students.favoritemovie @@ :q', q: query)
    else
      all
    end
  end
end
