class Interview.Models.Students extends Backbone.Model
  paramRoot: 'student'

  defaults:
    firstname: null
    lastname: null
    favoritefood: null
    favoritecolor: null
    favoritemovie: null

class Interview.Collections.StudentsCollection extends Backbone.Collection
  model: Interview.Models.Students
  url: '/students'
