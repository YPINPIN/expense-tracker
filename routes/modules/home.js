// Express & Router
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

// 匯出路由器
module.exports = router
