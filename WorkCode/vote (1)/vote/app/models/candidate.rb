class Candidate < ApplicationRecord
    validates :name, presence: true
    validates :age, presence: true
    validates :party, presence: true
    validates :politics, presence: true
    def display_name
        if gender == 1
            name + "先生"
        elsif age == 2
            gender + "女士"
        else
            "不知道"
        end
    end
end 
