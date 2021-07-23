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

// 支出編輯頁面
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  // 取出所有類別
  Category.find()
    .lean()
    .then((categories) => {
      // 取出指定紀錄
      Record.findById(id)
        .lean()
        .then((record) => res.render('edit', { categories, record }))
        .catch((error) => console.error(error))
    })
    .catch((error) => console.error(error))
})

// 支出編輯頁面
router.put('/:id', (req, res) => {
  const id = req.params.id
  // 取出表單資料
  const { name, category, date, amount } = req.body
  // 取出指定紀錄
  Record.findById(id)
    .then((record) => {
      record.name = name
      record.category = category
      record.date = date
      record.amount = amount
      return record.save()
    })
    .then(() => res.redirect('/'))
    .catch((error) => console.error(error))
})

// 刪除支出紀錄
router.delete('/:id', (req, res) => {
  const id = req.params.id
  // 取出指定紀錄
  Record.findById(id)
    .then((record) => record.remove())
    .then(() => res.redirect('/'))
    .catch((error) => console.error(error))
})

// 匯出路由器
module.exports = router
