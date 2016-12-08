class State < ApplicationRecord
  belongs_to :country
 # has_many :counties, :dependent => :destroy
  
 # accepts_nested_attributes_for :counties, reject_if: :all_blank, allow_destroy: true

end
