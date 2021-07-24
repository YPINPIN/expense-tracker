// Express
const express = require('express')
const exphbs = require('express-handlebars')
// method-override
const methodOverride = require('method-override')
// Heroku : process.env.PORT ; Local : 3000
const port = process.env.PORT || 3000

// 引用路由器，會自動抓取index
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine(
  'hbs',
  exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./tools/handlebarsHelpers'),
  })
)
app.set('view engine', 'hbs')
// body-parser
app.use(express.urlencoded({ extended: true }))
// static files
app.use(express.static('public'))
// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)

// 監聽
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
