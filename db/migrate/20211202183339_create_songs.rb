class CreateSongs < ActiveRecord::Migration[6.1]
  def change
    create_table :songs do |t|
      t.string :author
      t.text :body
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
