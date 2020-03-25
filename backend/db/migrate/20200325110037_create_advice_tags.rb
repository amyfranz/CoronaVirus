class CreateAdviceTags < ActiveRecord::Migration[6.0]
  def change
    create_table :advice_tags do |t|
      t.references :advice, null: false, foreign_key: true
      t.references :tag, null: false, foreign_key: true
  
      t.timestamps
    end
  end
end
