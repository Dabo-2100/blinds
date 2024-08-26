// Fatora System
let iName = document.querySelector("#iName");
let iPrice = document.querySelector("#iPrice");
let iQty = document.querySelector("#iQty");
let tbody = document.querySelector("table tbody");
let totalCell = document.querySelector("#totalValue");

let fatoraArr = [
  //   {
  //     name: "iPhone Cable",
  //     price: 20,
  //     qty: 2,
  //   },
  //   {
  //     name: "iPhone 7",
  //     price: 250,
  //     qty: 1,
  //   },
];

function renderFatora() {
  tbody.innerHTML = "";
  fatoraArr.forEach((el, index) => {
    tbody.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${el.qty}</td>
            <td>${el.price * el.qty}</td>
            <td><button class="btn btn-danger" onclick="deleteRow(${index})">del</button></td>
        </tr>
    `;
  });
  totalCell.innerHTML = getTotal();
}

function addToFatora() {
  let itemObj = {
    name: iName.value,
    price: +iPrice.value,
    qty: +iQty.value,
  };
  fatoraArr.push(itemObj);
  renderFatora();
  iPrice.value = "";
  iName.value = "";
  iQty.value = "";
}

renderFatora();

function getTotal() {
  let final = 0;
  fatoraArr.forEach((el, index) => {
    let subTotal = el.price * el.qty;
    final = final + subTotal;
  });
  return final;
}

function deleteRow(a) {
  fatoraArr.splice(a, 1);
  renderFatora();
}
