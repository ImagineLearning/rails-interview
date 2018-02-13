Interview.Views.Students ||= {}

class Interview.Views.Students.EditView extends Backbone.View
  template: JST["backbone/templates/students/edit"]

  events:
    "submit #edit-students": "update"

  update: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.save(null,
      success: (students) =>
        @model = students
        window.location.hash = "/#{@model.id}"
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
