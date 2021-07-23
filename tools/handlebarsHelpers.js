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

function formatDate(dateString) {
  const date = new Date(dateString)
  return `${date.getFullYear()}/${date.getMonth()}/${date.getUTCDate()} ${date.getHours()}:${date.getMinutes()}`
}

module.exports = { getTotalAmount, getCategoryIcon, formatDate }
