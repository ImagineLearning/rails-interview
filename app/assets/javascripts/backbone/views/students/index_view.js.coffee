Interview.Views.Students ||= {}

class Interview.Views.Students.IndexView extends Backbone.View
  template: JST["backbone/templates/students/index"]

  initialize: () ->
    @collection.bind('reset', @addAll)

  addAll: () =>
    @collection.each(@addOne)

  addOne: (students) =>
    view = new Interview.Views.Students.StudentsView({model : students})
    @$("tbody").append(view.render().el)

  render: =>
    @$el.html(@template(students: @collection, name_count: @name_count ))
    @addAll()

    return this
