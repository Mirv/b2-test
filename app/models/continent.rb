class Continent < ApplicationRecord
    has_many :regions, :dependent => :destroy
    has_many :countries, through: :regions
    
    accepts_nested_attributes_for :regions, reject_if: :all_blank, allow_destroy: true
    accepts_nested_attributes_for :countries, reject_if: :all_blank, allow_destroy: true
end
