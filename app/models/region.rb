class Region < ApplicationRecord
    belongs_to :continent
    has_many :countries, :dependent => :destroy
    has_many :states, through: :countries, :dependent => :destroy

    accepts_nested_attributes_for :countries, reject_if: :all_blank, allow_destroy: true
    accepts_nested_attributes_for :states, reject_if: :all_blank, allow_destroy: true
#  has_many :counties, through: :countries, :dependent => :destroy
#  accepts_nested_attributes_for :counties, reject_if: :all_blank, allow_destroy: true

end
  
