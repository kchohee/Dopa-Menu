Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/", to: "app#index"
  get 'dopa-menu/*stuff', to: 'app#index'
  get '/dopa-menu', to: 'app#index'
  scope module: 'api' do
    scope module: 'v1' do
      post "/login", to: "sessions#login"
      get "/session_auth", to: "sessions#session_auth"
      post "/register", to: "users#create"
      resources :users, except: :create do
         resources :menu_items, path:'menu'
         get '/category/:category', to: 'menu_items#category_items'
      end
    end
  end

end