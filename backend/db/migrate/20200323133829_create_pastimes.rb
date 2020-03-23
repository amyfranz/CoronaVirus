class CreatePastimes < ActiveRecord::Migration[6.0]
  def change
    create_table :pastimes do |t|
      t.string :name
      t.text :content
      t.integer :rating

      t.timestamps
    end
  end
end
