json.array! @students do |student|
  json.id student.id
  json.firstName student.firstname
  json.lastName student.lastname
  json.displayName student.displayname
  json.favoriteFood student.favoritefood
  json.favoriteColor student.favoritecolor
  json.favoriteMovie student.favoritemovie
end
