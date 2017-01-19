class UserConfirmEmailJob < ApplicationJob
  # 系統預設
  queue_as :default
  # 不急的話
  # queue_as :low_priorty
  # 緊急的話
  # queue_as :urgent
  def perform(candidate)
    @candidate = candidate
    mail to:@candidate.email, subject:"您好"
  end
end
