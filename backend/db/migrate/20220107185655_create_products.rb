class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :product_id
      t.string :name
      t.integer :quantity
      t.decimal :price
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
