# Better-Company

The live version can be found [here](https://better-company.herokuapp.com/sessions/new).
There's already an account in the live database. The credentials are
* email: bettercompany@email.com
* password: testtest

To run locally:

* Clone from GitHub
* cd into root directory
* run `bundle install` and `rake ember:install` to install the dependencies
* run `rake db:reset` to initialize the database
* run `rails server` or `rails s`
* visit `localhost:3000/users/new` to create a user
* visit `localhost:3000/sessions/new` to visit the first page as defined by the spec.
