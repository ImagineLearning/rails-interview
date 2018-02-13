class Interview.Routers.StudentsRouter extends Backbone.Router
  initialize: (options) ->
    @students = new Interview.Collections.StudentsCollection()
    @students.reset options.students
    @name_count = options.name_count

  routes:
    "new"      : "newStudents"
    "index"    : "index"
    ":id/edit" : "edit"
    ":id"      : "show"
    ".*"        : "index"

  newStudents: ->
    @view = new Interview.Views.Students.NewView(collection: @students)
    $("#students").html(@view.render().el)

  index: ->
    @view = new Interview.Views.Students.IndexView(collection: @students, name_count: @name_count)
    $("#students").html(@view.render().el)

  show: (id) ->
    students = @students.get(id)

    @view = new Interview.Views.Students.ShowView(model: students)
    $("#students").html(@view.render().el)

  edit: (id) ->
    students = @students.get(id)

    @view = new Interview.Views.Students.EditView(model: students)
    $("#students").html(@view.render().el)
