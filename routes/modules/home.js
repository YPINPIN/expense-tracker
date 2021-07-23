// Express & Router
const express = require('express')
const router = express.Router()
// record model
const Record = require('../../models/record')
// category model
const Category = require('../../models/category')

router.get('/', (req, res) => {
  // 取出所有類別
  Category.find()
    .lean()
    .then((categories) => {
      // 取出所有紀錄
      Record.find()
        .lean()
        .sort({ _id: 'asc' })
        .then((records) => res.render('index', { categories, records }))
        .catch((error) => console.error(error))
    })
    .catch((error) => console.error(error))
})

// 匯出路由器
module.exports = router
