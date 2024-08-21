let table = document.querySelector("table tbody");
let phoneNameInput = document.querySelector("#phoneName");
let phonePriceInput = document.querySelector("#phonePrice");
let products = [
  { name: "iPhone x", price: 200 },
  { name: "iPhone 11", price: 400 },
  { name: "iPhone 12", price: 500 },
  { name: "iPhone 13", price: 600 },
];

function renderProdcuts() {
  table.innerHTML = "";
  products.forEach((el, index) => {
    table.innerHTML += `
              <tr>
                  <td>1</td>
                  <td>${el.name}</td>
                  <td>${el.price} $</td>
                  <td><button onclick="deleteTask(${index})" class="btn btn-danger">Del</button></td>
              </tr>
          `;
  });
}

function addNewProduct() {
  let nameVal = phoneNameInput.value;
  let priceVal = phonePriceInput.value;
  let newPhoneObj = {
    name: nameVal,
    price: priceVal,
  };
  products.push(newPhoneObj);
  renderProdcuts();
  phoneNameInput.value = "";
  phonePriceInput.value = "";
}

renderProdcuts();

function deleteTask(product_index) {
  products.splice(product_index, 1);
  renderProdcuts();
}
