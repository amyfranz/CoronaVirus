Rails.application.routes.draw do
  resources :emails
  resources :ratings
  resources :pastimes
  resources :advices
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
