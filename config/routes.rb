Rails.application.routes.draw do
  root 'billboards#index'

  resources :billboards 

  resources :billboards do 
    resources :artists 
  end

  resources :artists do
    resources :songs
  end
end

# resources :artists, except:[:index, :new, :create, :edit, :show, :update, :destroy] do
#   resources :songs 
# end