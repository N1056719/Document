module CandidatesHelper
    def show_gender(candidate)
        if candidate.gender == 1
            "先生"
        elsif candidate.gender == 2
            "女士"
        else
            "不知道"
        end
    end
end
