# Eppes

[![codebeat badge](https://codebeat.co/badges/795df8a7-0fe8-4330-8169-9ff8362f59d9)](https://codebeat.co/projects/github-com-partydrone-rails-interview-master)


## Getting started

This project runs in Docker! To run it, you will need [Docker Community Edition (CE)](https://www.docker.com/community-edition) for your respective platform.

### Download the app from GitHub

To get up and running, clone this repo to your
local machine:

```
$ git clone https://github.com/partydrone/rails-interview Eppes
```

<!-- ### Create a `.env` file

This app gets most of it's configuration information from environment variables
stored in a local file. We included an example `.env.example` file. Copy this
file to `.env` at the root of the project and make any necessary changes.
Comments in the file will help you determine what values you need. -->

### Build the app
Once you have copied the project locally, run:

```
$ docker-compose build
```

This builds a new image from the app's codebase.

### Set up the database

You will need to create the database and seed it with some data:

```
$ docker-compose run app rake db:setup
```

## Running the app

When you're ready to fire it up:

```
$ docker-compose up -d
```

It may take a bit for all the container images to download the first time, but
once it's done you can make sure everything is running with the following command:

```
docker-compose ps
```

If everything is honky-dory, you will see something like this:

```
      Name                    Command               State           Ports         
----------------------------------------------------------------------------------
eppes_app_1        bundle exec puma -C config ...   Up      0.0.0.0:3000->3000/tcp
eppes_postgres_1   docker-entrypoint.sh postgres    Up      0.0.0.0:5432->5432/tcp
```

You can now access the app in a browser at [http://localhost:3000](http://localhost:3000).

## Cleaning up

Once you're done, just shut everything down:

```
$ docker-compose down
```

---

# rails-interview — a sample Ruby on Rails app for potential hires

## Introduction

Hi!  Thanks for your interest in joining the team.  This README will guide you
through completing our interview application.  While completing this
application, you'll get a bit of exposure to testing and completing a basic
Rails controller.

The app doesn't do much now, and has failing tests.  Your job is to complete
the application such that the views are populated with data, the tests pass,
and all requested functionality is completed.

After that you'll get the chance to show us how you'd implement the same
functionality in JavaScript if you were tasked with building a
single-page application.

Have fun with the challenge!  When you're done, please link your contact person
to your forked repository on GitHub.

## Getting Started

### Prerequisites

1. Ensure you have version `2.3` or higher of `ruby` installed on your machine.
1. Ensure you have `bundler` installed (`gem install bundler`)
1. Ensure you have `git` installed on your machine

### Fork and Clone rails-interview

1. Fork the [rails-interview](http://github.com/ImagineLearning/rails-interview)
   repository on GitHub.
1. `clone` it locally to your machine
1. When done, push your changes up to your fork

If you are unfamiliar with forking, [follow these instructions](https://help.github.com/articles/fork-a-repo)

### Start the Application

1. `cd` into the directory
1. Run `bundle install` to install gems
1. Run `bin\rails server`
1. Browse to [http://localhost:3000](http://localhost:3000/students)


## Solving the Problem - Ruby on Rails / TDD
This will run the tests as defined and report any errors making use of predefined fixtures.

We have given you some failing tests to try to fix.  We've also provided you
with some predefined fixture data to utilize.  As you implement your
Rails controller, you'll see the tests start to turn green.

You can run the tests by running

```
rake test
```

from the command line in the application directory.

Once all of your tests are passing, please move on to the JavaScript portion of
the application.

## Solving the Problem - JavaScript / SPA

Once you've completed the Rails portion of the application, you then get to use
a bit of creativity to implement that same page, but in JavaScript as a
single-page application.  You may use any of the following frameworks:

1. Backbone with or without Marionette
1. AngularJS 1.x
1. Angular 2+

We have several JavaScript applications in production with a few different
frameworks, so this part is important to us.  Structure this JS
application in a way that you find simple and easy to understand.

You may utilize a Rails view to load the header of the page, an entry point
DOM element, any JS templates
(ex. `<script type="text/template" id="someTpl">DOM TEMPLATE IN HERE</script>`)
and any extra JavaScript files you need to load.  All templates should be
loaded from the JavaScript side, not rendered by Rails.

### Tasks

1. Allow `/students` to return JSON using headers. (Don't use `/students.json`)
1. Add a nested collection route named `:js` to the `:students` resource
1. Create a corresponding `js` method in the `StudentsController`
1. Return a view from `/students/js` that will load a single-page application version
   of `/students` and fulfill the constraints listed above.
  1. SPA should only load everything below the `h1` header with front-end views
  1. The JavaScript code should trigger the rendering of the rest of the page.
1. SPA should have all functionality of `/students` with:
  - Sorting by clicking on table headers
  - Filtering by name with a text input just above the table
1. SPA should only make JSON AJAX calls to `/students`
  - Must use Promises (native, jQuery, $q, etc) for AJAX requests
  - Must implement successful case when API responds properly
  - Must implement unsuccessful case when API fails to respond

## Areas of Concern

We will be grading your interviews on a number of different criteria, but here
are some things to keep in mind.

1. We prefer readable code over clever code
1. We will be inspecting your commits independently
1. We like explanations in commits for why things were changed
1. We like separation of concerns (data, presentation, controls)

#### You're all Done!

Did you make it this far?  Good! We want to make sure you're paying attention.
Make a `POST` route for `/foo` point to any controller and action.
Inside that route, if a parameter named `valid` is present with the string `true`,
you should return only the text `BAR` with a `202` status code.
If the parameter is not present in the `POST` body or it is not the string
`true`, raise an exception.

Thanks!
