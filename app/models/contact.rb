class Contact < ApplicationRecord

  validates :f_name, :l_name, :email, :phone, :body, presence: true
  
end
