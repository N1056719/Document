class CreateCandidates < ActiveRecord::Migration[5.0]
  def change
    drop_table :candidates
    create_table :candidates do |t|
      t.string :name , null:false, :limit => 20
      t.string :party , null:false, :limit => 30
      t.integer :age, null:false
      t.text :politics, default:"無政黨"
      t.integer :votes, default:0
      t.integer :gender, null:false
      t.text :email, null:false

      t.timestamps
    end
  end
end
