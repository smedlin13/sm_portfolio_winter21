Rails.application.routes.draw do
 namespace :api do
  resources :contacts
 end

 get '*other', to: 'static#index'
 
end
