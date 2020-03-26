class CreatePastimes < ActiveRecord::Migration[6.0]
  def change
    create_table :pastimes do |t|
      t.string :icon
      t.string :summary
      t.text :content
      t.string :title
      t.string :img_url
      t.integer :like_count

      t.timestamps
    end
  end
end
