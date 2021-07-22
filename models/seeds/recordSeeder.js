// record model
const Record = require('../record')
const db = require('../../config/mongoose')

// 種子資料
const records = [
  { name: '房租', category: 'home', date: Date.now(), amount: 20000 },
  { name: '午餐', category: 'food', date: Date.now(), amount: 70 },
  { name: '公車', category: 'traffic', date: Date.now(), amount: 15 },
  { name: '電影票', category: 'entertainment', date: Date.now(), amount: 290 },
  { name: '晚餐', category: 'food', date: Date.now(), amount: 120 },
]

db.once('open', () => {
  Record.create(records)
    .then(() => {
      console.log('insert records done!')
      return db.close()
    })
    .then(() => {
      console.log('db connection close')
      console.log('recordSeeder done!')
    })
})
