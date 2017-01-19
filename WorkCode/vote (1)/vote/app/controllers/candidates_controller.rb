class CandidatesController < ApplicationController
    # 由於這個 controler 中有很多地方都會取用 index
    # 因此在 before action 先處理這段
    before_action :find_candidate, only: [:edit,:update,:destroy,:vote,:show]
    
    
    
    # 這是 controler 會來執行的 method
    def index
        # 候選人列表，這裡將 table candicates 的資料全部抓出來
        @candidates = Candidate.all
    end
    
    # 新增資料，將類別中的各個欄位清成空白
    def new
        # 這裡實作頁面會用到的變數
        # 新增一筆資料時回傳新增資料的一個類別變數實體
        @candidate = Candidate.new
        # 用亂數產生一個年齡
        @candidate.age =  [*20..60].sample
    end
    
    # 將新增資料寫入到資料庫中
    def create
        # 寫入資料
        @candidate = Candidate.new(candidate_params)
        
        # 新增程式中斷點
        # debugger
        # 在網頁上顯示訊息
        # rander plan 
        
        # 判斷寫入是否成功
        #if @candidate.save! 這個寫法會引發 catch
        begin
            if @candidate.save
                # 寫入資料成功，將執行結果回傳給前端
                flash[:notice] = "新增成功"
                redirect_to candidates_path
            else
                # 寫入失敗
                flash[:notice] = "新增失敗"
                # 借由 new 的畫面來呈現結果，避免新增失敗之前所輸入的資料變成白費
                render :new
                # 以下的寫法會在失敗時回到新增的空白頁面，這讓使用者抓狂
                #redirect_to candidates_path
            end
        rescue SystemCallError
            $stderr.print "IO failed: " + $!
            raise
        end
    end
    
    # 編輯資料
    def edit
        # 以 id 取出要修改的資料列
        # @candidate = Candidate.find_by(id: params[:id])
    end 
    
    # 資料更新的方法
    def update
        # 寫入資料
        # 以 id 取出要修改的資料列
        # @candidate = Candidate.find_by(id: params[:id])
        # 判斷寫入是否成功
        if @candidate.update_attributes(candidate_params)
            # 更新資料成功，將執行結果回傳給前端
            redirect_to candidates_path, notice: "資料更新成功"
        else
            # 借由 edit 的畫面來呈現結果，避免失敗，之前所輸入的資料變成白費
            # 更新失敗，停留在原本修改資料的畫面
            render :edit
        end
    end
    
    # 刪除資料
    def destroy
        # 以 id 取出要修改的資料列
        # @candidate = Candidate.find_by(id: params[:id])
        @candidate.destroy 
        if @candidate
            # 更新資料成功，將執行結果回傳給前端
            redirect_to candidates_path, notice: "候選人資料已經刪除"
        end
    end
    
    def show
    end
    
    # 進行投票
    def vote
        # 以 id 取出要修改的資料列
        # @candidate = Candidate.find_by(id: params[:id])
        @candidate.increment(:votes)
        @candidate.save
        # 更新資料成功，將執行結果回傳給前端
        redirect_to candidates_path, notice: "完成投票"
    end
    
    # 因為安全上的問題，有心人士可以透過這個方式直接覆寫某個欄位的值而取得特別權限
    # 使用 Strong Parameters 的方式，對這包 params 進行「清洗」
    # 這個方法沒有要給外部存取，因此存取類型設為 private
    private def candidate_params
        # 只允許 name、age, party 以及 :politics 這些參數通過
        params.require(:candidate).permit(:name,:age,:party,:politics)
    end
    
    # 以 id 取出要修改的資料列
    # 因為這裡很多地方都會用到，因此獨立成為一個 private function
    private def find_candidate
        # 以 id 取出要修改的資料列
        @candidate = Candidate.find_by(id: params[:id])
        # ruby 特殊倒裝句的判斷語法
        redirect_to candidates_path, notice: "查無資料"  if not @candidate
    end
end
