# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Student.create!({
  firstname: "Jimmy",
  lastname: "Butler",
  favoritefood: "Onion Soup",
  favoritecolor: "Yellow",
  favoritemovie: "Orange County"
})

Student.create!({
  firstname: "Jimmy",
  lastname: "Garrapolo",
  favoritefood: "Tempura shrimp",
  favoritecolor: "Thistle",
  favoritemovie: "Taboo"
})

Student.create!({
  firstname: "Tom",
  lastname: "Brady",
  favoritefood: "Eggs",
  favoritecolor: "Elmer",
  favoritemovie: "Elysium"
})

Student.create!({
  firstname: "Kobe",
  lastname: "Bryant",
  favoritefood: "Rottini",
  favoritecolor: "Red",
  favoritemovie: "Radio"
})

Student.create!({
  firstname: "Shaquille",
  lastname: "O'Neal",
  favoritefood: "Veal",
  favoritecolor: "Violet",
  favoritemovie: "V for Vendetta"
})

Student.create!({
  firstname: "Joey",
  lastname: "Galloway",
  favoritefood: "Onion Soup",
  favoritecolor: "Red",
  favoritemovie: "Taboo"
})
