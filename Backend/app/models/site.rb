class Site < ApplicationRecord
  belongs_to :user
  belongs_to :video
  belongs_to :image 
  belongs_to :new
end
