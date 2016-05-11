# ember-cli-rails-starter

A boilerplate for building full-stack applications with Ember CLI, Ruby on Rails, and the
[ember-cli-rails gem](https://github.com/thoughtbot/ember-cli-rails).

This will let you skip the installation and setup steps in the ember-cli-rails docs. It also sets up
Ember to use [ActiveModelAdapter](https://github.com/ember-data/active-model-adapter) and Rails to use [ActiveModelSerializer](https://github.com/rails-api/active_model_serializers) so that your frontend and
backend speak to each other in the same JSON format.

## Usage

In the root directory, run `bundle install` and `rake ember:install` to install dependencies.

Then run `rails server` and visit `localhost:3000`. You should see your empty Ember app, with the
"Welcome to Ember" page.

From the root directory, you can develop your Rails app as you normally would. `cd` into the
`frontend` directory, and then you can run Ember CLI commands to build your Ember app.

## Important note on ActiveModelSerializer

When you generate a resource in Rails, a serializer will be created in the `/app/serializers/`
directory. By default, this serializer only contains the `:id` attribute, so when you make a
request for this resource, the response will contain only the records' IDs.

You can add other attributes to the response by adding more keys to the `attributes` call. For more
information, see the [docs](https://github.com/rails-api/active_model_serializers).

## Namespacing requests

To avoid conflicts with URLs that might match both frontend and backend routes, this boilerplate
adds `namespace: 'api'` to the Ember application adapter. This means Ember Data will make requests
to `/api/todos`, instead of `/todos`.

To change this, update or remove the `namespace` property of the adapter in
`frontend/app/adapters/application.js`.

You can find a guide [here](http://collectiveidea.com/blog/archives/2013/06/13/building-awesome-rails-apis-part-1/) on how to namespace your Rails API.

## What this boilerplate doesn't do

* It doesn't configure anything for deploying your app. There are instructions for that in the
[ember-cli-rails documentation](https://github.com/thoughtbot/ember-cli-rails).
* It doesn't remove any dependencies from the defaults in either Ember or Rails.
* It doesn't build anything. It just wires together an empty Rails app with an empty Ember CLI app.
You can find an example app using the ember-cli-rails gem [here](https://github.com/seanpdoyle/ember-cli-rails-heroku-example).

