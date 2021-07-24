# Expense Tracker

AlphaCamp Project : expense-tracker

## 網站主要功能

- 使用者可以在首頁一次瀏覽所有支出的清單&總金額
- 使用者可以新增一筆支出
- 使用者可以編輯支出的所有屬性 (一次只能編輯一筆)
- 使用者可以刪除任何一筆支出 (一次只能刪除一筆)
- 使用者可以在首頁根據支出「類別」篩選支出；總金額的計算只會包括被篩選出來的支出總和。

## 專案畫面演示

![demo](./demo.gif)

## Heroku 網站演示

https://obscure-basin-65788.herokuapp.com/

## 環境建置

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node Version Manager (nvm) for Windows](https://github.com/coreybutler/nvm-windows/releases)
- 使用 nvm 安裝 Node.js v14.17.1
- [nodemon](https://www.npmjs.com/package/nodemon)
- [Express](https://www.npmjs.com/package/express)
- [Express Handlebars](https://www.npmjs.com/package/express-handlebars)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [mongoose](https://www.npmjs.com/package/mongoose)

## 安裝專案

### 1. 開啟終端機(Terminal)，Clone 此專案至本機

```
git clone https://github.com/YPINPIN/expense-tracker.git
```

### 2. Terminal 輸入以下指令進入專案

```
cd expense-tracker
```

### 3. Terminal 輸入以下指令安裝 npm 套件

```
npm install
```

### 4. 加入種子資料

```
npm run seed
```

### 4. Terminal 輸入以下指令啟動伺服器

```
npm run start
```

Terminal 顯示 Server is running on http://localhost:3000 即啟動完成

### 5. 請至 http://localhost:3000 開始使用網站

## 專案開發人員

> [YPINPIN](https://github.com/YPINPIN)
