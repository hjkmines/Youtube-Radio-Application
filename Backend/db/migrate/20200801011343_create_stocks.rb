class CreateStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :stocks do |t|
      t.string :name
      t.string :ticker
      t.integer :current_price
      t.integer :low
      t.integer :high

      t.timestamps
    end
  end
end
