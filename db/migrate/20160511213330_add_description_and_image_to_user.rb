  class AddDescriptionAndImageToUser < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :description
      t.string :image
    end
  end
end
