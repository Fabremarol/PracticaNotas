Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :notes, only: [:index, :show, :create, :update, :destroy]
    end 
  end 

root to: 'api/v1/notes#index'

end
