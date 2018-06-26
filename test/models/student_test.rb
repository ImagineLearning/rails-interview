require 'test_helper'

class StudentTest < ActiveSupport::TestCase
  let(:student) { Student.new(firstname: 'Barney', lastname: 'Rubble', favoritefood: 'rock candy', favoritecolor: 'brown', favoritemovie: 'Rocky') }

  test "is a valid object" do
    assert student.valid?
  end

  test "initializes the last name" do
    assert_equal student.lastinitial, 'R.'
  end

  test "has a display name" do
    assert_respond_to student, :displayname
  end

  test "display name returns first name if unique" do
    assert_equal student.displayname, 'Barney'
  end

  test "display name adds last initial if first name is not unique" do
    student.firstname = students(:one).firstname
    assert_equal student.displayname, [student.firstname, student.lastinitial].join(' ')
  end

  test "has a search method" do
    assert_respond_to Student, :search
  end
end
