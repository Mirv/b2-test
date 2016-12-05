class Country < ApplicationRecord
  belongs_to :region
  belongs_to :continent
  has_many   :states
  
  accepts_nested_attributes_for :states, reject_if: :all_blank, allow_destroy: true
end
