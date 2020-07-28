class CreateSites < ActiveRecord::Migration[6.0]
  def change
    create_table :sites do |t|
      t.references :user, null: false, foreign_key: true
      t.references :video, null: false, foreign_key: true

      t.timestamps
    end
  end
end
