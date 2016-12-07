class Country < ApplicationRecord
  belongs_to :region
  belongs_to :continent
  has_many   :states
  has_many   :counties, through: :states, :dependent => :destroy
  
  accepts_nested_attributes_for :states, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :counties, reject_if: :all_blank, allow_destroy: true
end
