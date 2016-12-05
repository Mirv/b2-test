class RenameRegionIdToregionId < ActiveRecord::Migration[5.0]
  def change
    rename_column :countries, :Region_id, :region_id
  end
end
