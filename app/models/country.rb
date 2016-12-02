class Country < ApplicationRecord
  belongs_to :Region
  belongs_to :Continent
end
