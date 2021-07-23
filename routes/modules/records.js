// Express & Router
const express = require('express')
const router = express.Router()
// record model
const Record = require('../../models/record')
// category model
const Category = require('../../models/category')

// 新增支出頁面
router.get('/new', (req, res) => {
  // 取出所有類別
  Category.find()
    .lean()
    .then((categories) => {
      res.render('new', { categories })
    })
    .catch((error) => console.error(error))
})

// 新增支出資料
router.post('/', (req, res) => {
  // 取出表單資料
  const { name, category, date, amount } = req.body
  // 資料庫新增支出資料
  Record.create({
    name,
    category,
    date,
    amount,
  })
    .then(() => res.redirect('/'))
    .catch((error) => console.error(error))
})

// 匯出路由器
module.exports = router
