Interview.Views.Students ||= {}

class Interview.Views.Students.StudentsView extends Backbone.View
  template: JST["backbone/templates/students/students"]

  events:
    "click .destroy" : "destroy"

  tagName: "tr"

  destroy: () ->
    @model.destroy()
    this.remove()

    return false

  render: ->
    @$el.html(@template(@model.toJSON() ))
    return this
