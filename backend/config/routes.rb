Rails.application.routes.draw do
  resources :product, exclude: [:destroy]
  delete '/product/:product_id', to: 'product#destroy'
  get '/products/csv', to: 'product#return_csv'

end
