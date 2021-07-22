// Express
const express = require('express')
const exphbs = require('express-handlebars')
const port = 3000

// 引用路由器，會自動抓取index
const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// 將 request 導入路由器
app.use(routes)

// 監聽
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
