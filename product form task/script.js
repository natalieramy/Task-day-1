
var products = [];

var updateId = null;



if (localStorage.getItem("products") != null) {

    products = JSON.parse(
        localStorage.getItem("products")
    );

}

displayProducts();

function addProduct() {

    // Get values from HTML

    var name = document.getElementById("name").value;

    var description = document.getElementById("description").value;

    var color = document.getElementById("color").value;

    var outOfStock = document.getElementById("outOfStock").checked;



    if (
        name == "" ||
        description == "" ||
        color == ""
    ) {

        alert("Please enter all data");

        return;

    }

    var product = {

        id: Date.now(),

        name: name,

        description: description,

        color: color,

        outOfStock: outOfStock

    };

    products.push(product);

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    displayProducts();

    clearForm();

}


function displayProducts() {

    var tableBody = document.getElementById("tableBody");


    tableBody.innerHTML = "";


    products.forEach(function(product) {

        var row = document.createElement("tr");


        row.innerHTML = `

            <td>${product.name}</td>

            <td>${product.description}</td>

            <td>${product.color}</td>

            <td>

                ${
                    product.outOfStock
                    ? '<span class="out">Yes</span>'
                    : '<span class="available">No</span>'
                }

            </td>

            <td>

                <button 
                    class="edit"
                    onclick="editProduct(${product.id})"
                >
                    Edit
                </button>

                <button 
                    class="delete"
                    onclick="deleteProduct(${product.id})"
                >
                    Delete
                </button>

            </td>

        `;


        tableBody.appendChild(row);

    });

}


function deleteProduct(id) {


    products = products.filter(function(product) {

        return product.id != id;

    });



    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    displayProducts();

}


function editProduct(id) {


    var product = products.find(function(product) {

        return product.id == id;

    });


    document.getElementById("name").value =
        product.name;


    document.getElementById("description").value =
        product.description;


    document.getElementById("color").value =
        product.color;


    document.getElementById("outOfStock").checked =
        product.outOfStock;




    updateId = id;

}


function updateProduct() {

    if (updateId == null) {

        alert("Please choose a product first");

        return;

    }


    var name = document.getElementById("name").value;

    var description =
        document.getElementById("description").value;

    var color =
        document.getElementById("color").value;

    var outOfStock =
        document.getElementById("outOfStock").checked;



    var product = products.find(function(product) {

        return product.id == updateId;

    });



    product.name = name;

    product.description = description;

    product.color = color;

    product.outOfStock = outOfStock;



    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );



    displayProducts();



    clearForm();



    updateId = null;

}


function searchProducts() {

    var searchValue =
        document.getElementById("search").value.toLowerCase();


  

    var result = products.filter(function(product) {

        var name =
            product.name.toLowerCase();

        var description =
            product.description.toLowerCase();

        var color =
            product.color.toLowerCase();


        var stock = "";

        if (product.outOfStock == true) {

            stock = "out of stock yes true";

        } else {

            stock = "in stock no false";

        }

        return (
            name.includes(searchValue) ||
            description.includes(searchValue) ||
            color.includes(searchValue) ||
            stock.includes(searchValue)
        );

    });


    displaySearchResult(result);

}


function displaySearchResult(result) {

    var tableBody =
        document.getElementById("tableBody");


    tableBody.innerHTML = "";


    result.forEach(function(product) {

        var row = document.createElement("tr");


        row.innerHTML = `

            <td>${product.name}</td>

            <td>${product.description}</td>

            <td>${product.color}</td>

            <td>

                ${
                    product.outOfStock
                    ? '<span class="out">Yes</span>'
                    : '<span class="available">No</span>'
                }

            </td>

            <td>

                <button
                    class="edit"
                    onclick="editProduct(${product.id})"
                >
                    Edit
                </button>

                <button
                    class="delete"
                    onclick="deleteProduct(${product.id})"
                >
                    Delete
                </button>

            </td>

        `;

        tableBody.appendChild(row);

    });

}


function clearForm() {

    document.getElementById("name").value = "";

    document.getElementById("description").value = "";

    document.getElementById("color").value = "";

    document.getElementById("outOfStock").checked = false;

}