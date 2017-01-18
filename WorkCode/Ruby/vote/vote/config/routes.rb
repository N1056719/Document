Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #get "/" , to: "welcome#index"
  # 指定 root 的執行路徑
  root "welcome#index"
  
  # 指定 candidates 執行的路徑
  #get "/candidates" , to: "candidates#index"
  # 指定 candidates 執行的路徑
  #get "/candidates/new" , to: "candidates#new"
  resources :candidates do
    member do
      # 指定要產生投票的 path
      post :vote
    end
  end
  
  # 如果有不需要開放的路徑，以下可以設定
  #resources :candidates, only: [:index,:show]
  # 需要排除的路徑，以下可以設定
  #resources :candidates, only: [:index,:show]
end
