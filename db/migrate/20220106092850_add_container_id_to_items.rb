class AddContainerIdToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :container_id, :integer
    add_index :items, :container_id
  end
end
