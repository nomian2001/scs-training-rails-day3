Rails.application.routes.draw do
  resources :containers 
  resources :items
  

  root 'containers#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
