Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'users/index'
      post 'users/create'
      get '/show/:id', to: 'users#show'
      delete '/destroy/:id', to: 'users#destroy'
      post '/register', to: 'users#create'

      get 'posts/index'
      post 'posts/create'
      get '/show/:id', to: 'posts#show'
      delete '/destroy/:id', to: 'posts#destroy'
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # Defines the root path route ("/")
  # root "articles#index"
  match '*unmatched', to: 'application#not_found_method', via: :all
end
