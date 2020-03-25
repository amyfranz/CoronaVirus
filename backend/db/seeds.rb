# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Advice.create(content: "contentcontentcontent", video: "kkkkkkkk", image: "njnjn")
Advice.create(content: "contentckjhkjhkjhkjhkt", video: "uuuuuu", image: "iijijij")
Advice.create(content: "contentkjhkjhkjhkjntent", video: "kkkkkyyykkk", image: "drdrdrdr")
Advice.create(content: "cokjhkjhkjhentcontent", video: "kkyyyyyyykkkkk", image: "tftf")
Advice.create(content: "cokjhkjhkjhkent", video: "rrrrrrrrr", image: "gygyyg")

Tag.create(name: "dont go onvbnvbnvut", advice_id: 1)
Tag.create(name: "dont govnbvnb out", advice_id: 2)
Tag.create(name: "dont go nbcnbvnbvout", advice_id: 2)
Tag.create(name: "dont go ovcxvxcvcxut", advice_id: 3)
Tag.create(name: "dont ffffffffgo out", advice_id: 3)
Tag.create(name: "dasdas", advice_id: 1)
Tag.create(name: "dont gdasdasdsao out", advice_id: 5)
Tag.create(name: "donteqweqweqweqw go out", advice_id: 4)

Pastime.create(name: "stringfgg", content: "teqweqweqxt", title: "Quarantine Properly", summary: 'sgdjsahgfj', img_url: 'stock-image.jpg')
Pastime.create(name: "stringggg", content: "tefsdfsxt", title: "Don't Panic Buy", summary: 'sgdjsahgfj', img_url: 'panic-buy.jpg')
Pastime.create(name: "strinfddfdg", content: "tesdfsdxt", title: "Exercise Regularly", summary: 'sgdjsahgfj', img_url: 'exercise.jpg')


Rating.create(rate: 5, pastime_id: 1)
Rating.create(rate: 4, pastime_id: 3)
Rating.create(rate: 2, pastime_id: 2)
Rating.create(rate: 1, pastime_id: 2)
Rating.create(rate: 2, pastime_id: 2)