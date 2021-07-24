const categoryForm = document.querySelector('#categoryForm')
const categorySelect = document.querySelector('#categorySelect')

categorySelect.addEventListener('change', () => categoryForm.submit())
