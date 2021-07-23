// Express & Router
const express = require('express')
const router = express.Router()
// home
const home = require('./modules/home')
// records
const records = require('./modules/records')

// 將網址結構符合 / 字串的 request 導向 home 模組
router.use('/', home)
// 將網址結構符合 /records 字串開頭的 request 導向 records 模組
router.use('/records', records)

// 匯出路由器
module.exports = router
