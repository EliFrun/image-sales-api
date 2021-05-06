Rails.application.routes.draw do
  resources :image
  resources :user
  resources :property, only: [:index]
  get '/property/:name', to: 'property#show'

  post '/transaction', to: 'transaction#sell'
end
