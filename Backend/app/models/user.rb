class User < ApplicationRecord
  # validates_presence_of :first_name, :last_name, :email, :password 
  # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  # validates :password, uniqueness: true, length: {in: 7..25}
end
