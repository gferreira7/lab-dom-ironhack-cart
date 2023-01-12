// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML
  const quantity = product.querySelector('.quantity input').value
  const subtotal = price * quantity

  product.querySelector('.subtotal span').innerHTML = subtotal
  console.log(price, quantity, subtotal)

  return subtotal
  //... your code goes here
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName('product')
  const productsArray = [...products]

  let totalCartValue = 0
  productsArray.forEach((product) => {
    totalCartValue += updateSubtotal(product)
  })

  // ITERATION 3
  //... your code goes here
  document.querySelector('#total-value span').innerHTML = totalCartValue
  return totalCartValue
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget
  console.log('The target in remove is:', target)
  //... your code goes here
  const nodeToRemove = target.parentNode.parentNode
  nodeToRemove.remove()
  calculateAll()
}
// ITERATION 5

function createProduct() {
  //... your code goes here

  //getting the values we need
  const newProductInputs = document.querySelectorAll('.create-product input ')
  const newProductInfoArray = [...newProductInputs]
  productName = newProductInfoArray[0].value
  price = newProductInfoArray[1].value

  //creating a new table row to be added later and passing the data to it
  const newProductRow = document.createElement('tr')
  newProductRow.className = 'product'

  newProductRow.innerHTML = `<td class="name">
  <span>${productName}</span>
</td>
<td class="price">$<span>${price}</span></td>
<td class="quantity">
  <input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
  <button class="btn btn-remove">Remove</button>
</td>`

  document.querySelector('#cart tbody').appendChild(newProductRow)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate')
  calculatePricesBtn.addEventListener('click', calculateAll)

  //... your code goes here
  const removeItemsBtn = document.getElementsByClassName('btn-remove')
  const removeItemsBtnArray = [...removeItemsBtn]
  removeItemsBtnArray.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })

  const createItemsBtn = document.getElementById('create')
  createItemsBtn.addEventListener('click', createProduct)
})
