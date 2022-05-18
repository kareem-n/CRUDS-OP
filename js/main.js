var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCategory = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
var indexOfElement = 0;
var productList;

if (localStorage.getItem("products") != null) {
  productList = JSON.parse(localStorage.getItem("products"));
  display(productList);
} else {
  productList = [];
}

function addProduct() {
  if (validProductName() == true) {
    var product = {
      name: productName.value,
      price: productPrice.value,
      category: productCategory.value,
      desc: productDesc.value,
    };

    productList.push(product);
  } else {
    alert("invalid product name");
  }
}

// display data
function display(list) {
  var x = ``;

  for (var i = 0; i < list.length; i++) {
    x += `
    <tr class="text-center">
       <td>${i + 1}</td>
       <td>${list[i].name}</td>
       <td>${list[i].price}</td>
       <td>${list[i].category}</td>
       <td>${list[i].desc}</td>
       <td><button onclick="update(${i})" class="btn btn-primary">Update</button></td>
       <td><button onclick="deleteProduct(${i})" class="btn btn-danger">Delete</button></td>
    </tr>
    `;
  }
  document.getElementById("pro").innerHTML = x;
}
// clear inputs after entering the data
function clearInputs() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDesc.value = "";
}
// update an element

function update(x) {
  productName.value = productList[x].name;
  productPrice.value = productList[x].price;
  productCategory.value = productList[x].category;
  productDesc.value = productList[x].desc;
  document.getElementById("main").innerHTML = "update";
  indexOfElement = x;
}
function edit() {
  productList[indexOfElement].name = productName.value;
  productList[indexOfElement].price = productPrice.value;
  productList[indexOfElement].category = productCategory.value;
  productList[indexOfElement].desc = productDesc.value;
}

function mainBtn() {
  if (document.getElementById("main").innerHTML == "update") {
    edit();
    document.getElementById("main").innerHTML = "Add Product";
  } else {
    addProduct();
  }
  localStorage.setItem("products", JSON.stringify(productList));
  display(productList);
  clearInputs();
}

// delete the specific elemnt
function deleteProduct(x) {
  productList.splice(x, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  display(productList);
}
// valid

function validProductName() {
  var regex = /^[A-Z][a-z]{3,8} |[0-9]$/;
  if (regex.test(productName.value) == true) {
    return true;
  } else {
    return false;
  }
}

var x = ''
x.includes(); 

// search product name
function searchProductName() {
  var search = document.getElementById("search").value;
  var searchList = [] ; 
  for (var i = 0; i < productList.length; i++) {
    if( productList[i].name.toLowerCase().includes(search.toLowerCase()) ==true )
    {
      searchList.push(productList[i]) ; 
    }



  }
  display(searchList);

}