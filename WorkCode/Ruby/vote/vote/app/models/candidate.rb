class Candidate < ApplicationRecord
    # 以下定義需要驗證的欄位
    validates :name, presence: true
    validates :gender, presence: true
    validates :age, presence: true
    validates :party, presence: true
    validates :politics, presence: true
    validates :email, presence: true
    # 以下定義固定的查詢條件，可以節省程式碼的寫法
    # 姓名不為空白的條件
    scope :default_not_null_name , -> {where("name <> ''")}
    # 成年的男性
    scope :adult_male , -> {where("gender=1").where("age >= 20")}


    def display_name
        if gender == 1
            name + "先生"
        elsif gender == 2
            name + "女士"
        else
            "不知道"
        end
    end
end
