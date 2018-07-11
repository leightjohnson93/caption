# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.delete_all
Photo.create(
  [
  {
    caption: "A new cake recipe",
  },
  {
    caption: "A twitter client idea",
  },
  {
    caption: "A novel set in Italy",
  },
  {
    caption: "Card game design"
  }
])


Photo.first.image.attach(io: File.open('./lib/seeds/lights.jpg'), filename: 'lights.jpg')
