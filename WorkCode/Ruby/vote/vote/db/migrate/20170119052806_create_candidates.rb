class CreateCandidates < ActiveRecord::Migration[5.0]
  def change
    drop_table :candidates
    create_table :candidates do |t|
      t.string :name , :limit => 20
      t.string :party , :limit => 30
      t.integer :age
      t.text :politics, default:"無政黨"
      t.integer :votes ,default:0
      t.integer :gender ,default:0

      t.timestamps
    end
  end
end
