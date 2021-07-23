// 計算總金額
function getTotalAmount(records) {
  let totalAmount = 0
  records.forEach((record) => {
    totalAmount += record.amount
  })
  return totalAmount
}

// 取得類別Icon
function getCategoryIcon(categories, value) {
  if (!categories || categories.length <= 0) {
    return ''
  }
  for (let i = 0; i < categories.length; i++) {
    if (categories[i]['value'] === value) {
      return categories[i]['icon']
    }
  }
  return ''
}

// 格式化日期
function formatDate(dateString) {
  const date = new Date(dateString)
  return `${date.getFullYear()}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, 0)}/${date.getDate().toString().padStart(2, 0)}`
}

function getDate(dateString) {
  const date = new Date(dateString)
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`
}

// 檢查值是否相同
function isEqual(target1, target2) {
  return target1 === target2
}

module.exports = {
  getTotalAmount,
  getCategoryIcon,
  formatDate,
  getDate,
  isEqual,
}
