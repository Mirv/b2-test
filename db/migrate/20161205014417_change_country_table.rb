class ChangeCountryTable < ActiveRecord::Migration[5.0]
  def change

      remove_index :countries, :Region_id


  end
end
