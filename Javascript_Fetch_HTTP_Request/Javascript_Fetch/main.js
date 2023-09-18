$(document).ready(function(e) {
    jsonObject.products.forEach((product) => loadProducts(product));
});

function loadProducts(data) {
    var li = document.createElement('li');
    li.innerHTML =
        '<div class="card mt-1">' +
        '<div class="product-1 align-items-center p-2 text-center" onclick="product_click(' + data.id + ')">' +
        '<img src="' + data.image + '" alt="" class="rounded" width="150" height="100">' +
        '<h6 class="mt-0 font-weight-bold mb-2 info">' + data.title + '</h6>' +
        '<p class="description">' + data.description + '</p>' +
        '<p class="price">Price: $' + data.price + '</p>' +
        '</div>' +
        '</div>'; // Close the card div

   
    var productList = document.getElementById('productList'); // Replace 'productList' with your actual list element's ID
    productList.appendChild(li);
}
console.log(jsonObject); 