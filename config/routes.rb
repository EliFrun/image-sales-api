Rails.application.routes.draw do
  namespace :api do #, constraints: { format: 'json' } do  
      resources :images
      resources :users
      resources :propertys 
  end  
end
