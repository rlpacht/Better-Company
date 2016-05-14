Rails.application.routes.draw do

  namespace :api do 
    resources :posts, :only => [:create, :index]
    resources :users, :only => [:show]
  end
  get "/users/new", to: "users#new"

  post "users", to: "users#create"

  get "sessions/new", to: "sessions#new"

  post "sessions", to: "sessions#create"

  delete "sessions", to: "sessions#destroy"

  mount_ember_app :frontend, to: "/"
end
