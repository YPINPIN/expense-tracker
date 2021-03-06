// mongoose
const mongoose = require('mongoose')
// Heroku : process.env.MONGODB_URI ; Local : mongodb://localhost
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/Expense'
// 連線mongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db
