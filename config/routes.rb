Rails.application.routes.draw do
  mount_ember_app :frontend, to: "/"
  namespace :api do 
    resources :posts
  end
  get "/users/new", to: "users#new"

  post "users", to: "users#create"

  get "sessions/new", to: "sessions#new"

  post "sessions", to: "sessions#create"

  delete "sessions", to: "sessions#destroy"
  
  
end
