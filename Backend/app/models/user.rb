class User < ApplicationRecord
  validates :first_name, precense: true  
  validates :last_name, precense: true 
  validates :email, precense: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, uniqueness: true, length: {in: 7..25}, precense: true
end
