class CreateAdvices < ActiveRecord::Migration[6.0]
  def change
    create_table :advices do |t|
      t.text :content
      t.string :video
      t.string :image

      t.timestamps
    end
  end
end
