class CreateContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :contacts do |t|
      t.string :f_name
      t.string :l_name
      t.string :email
      t.integer :phone
      t.text :body

      t.timestamps
    end
  end
end
