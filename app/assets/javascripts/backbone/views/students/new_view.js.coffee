Interview.Views.Students ||= {}

class Interview.Views.Students.NewView extends Backbone.View
  template: JST["backbone/templates/students/new"]

  events:
    "submit #new-students": "save"

  constructor: (options) ->
    super(options)
    @model = new @collection.model()

    @model.bind("change:errors", () =>
      this.render()
    )

  save: (e) ->
    e.preventDefault()
    e.stopPropagation()

    @model.unset("errors")

    @collection.create(@model.toJSON(),
      success: (students) =>
        @model = students
        window.location.hash = "/#{@model.id}"

      error: (students, jqXHR) =>
        @model.set({errors: $.parseJSON(jqXHR.responseText)})
    )

  render: ->
    @$el.html(@template(@model.toJSON() ))

    this.$("form").backboneLink(@model)

    return this
