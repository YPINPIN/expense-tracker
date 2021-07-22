//category model
const Category = require('../category')
const db = require('../../config/mongoose')

// 種子資料
const categories = [
  { value: 'home', title: '家居物業', icon: 'fas fa-home' },
  { value: 'traffic', title: '交通出行', icon: 'fas fa-shuttle-van' },
  { value: 'entertainment', title: '休閒娛樂', icon: 'fas fa-grin-beam' },
  { value: 'food', title: '餐飲食品', icon: 'fas fa-utensils' },
  { value: 'other', title: '其他', icon: 'fas fa-pen' },
]

db.once('open', () => {
  Category.create(categories)
    .then(() => {
      console.log('insert categories done!')
      return db.close()
    })
    .then(() => {
      console.log('db connection close')
      console.log('categorySeeder done!')
    })
})
