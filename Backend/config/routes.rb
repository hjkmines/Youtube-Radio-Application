Rails.application.routes.draw do
  resources :stocks
  resources :users
  resources :images
  resources :articles
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
