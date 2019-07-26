window.addEventListener("load", init);
// var a = "<li>Hello</li>";
function bindEvents() {
	document.getElementById('searchBt').addEventListener('click', doSearch);
}


function doSearch() {
	var price = document.getElementById('price').value;
	var result = productOperations.search(price);
	loadProducts(result);
}

function loadProducts(products) {
	var ul = document.getElementById('products');
	ul.innerHTML = '';
	var products = productOperations.read();
	for (let product of products) {
		printProduct(product);
	}
}

function init() {
	bindEvents();
}
const viewCart = () => document.getElementById('viewcart').innerText = productOperations.countItemInCarts();

function addToCart() {
	var id = this.getAttribute('product-id');
	productOperations.toggleCart(id);
	var isAdded = productOperations.searchById(id).isAdded;
	this.innerText = isAdded ? "Remove From Cart" : "Add to Cart";
	console.log(id);
	viewCart();
}

function addToCartButton(id) {
	var button = document.createElement('button');
	button.innerText = 'Add to Cart';
	button.addEventListener('click', addToCart);
	button.setAttribute('product-id', id);
	return button;
}

function printProduct(product) {
	var ul = document.getElementById('products');
	var li = document.createElement("li");
	li.appendChild(createImage(product.url));
	li.appendChild(createSpan(product.name, product.price));
	li.appendChild(addToCartButton(product.id));
	//li.innerText = product.name + " "+ product.price;
	ul.appendChild(li);
}

function createImage(url) {
	var img = document.createElement('img');
	img.src = url;
	img.className = 'size';
	return img;
}

function createSpan(name, price) {
	var span = document.createElement('span');
	span.innerText = name + " " + price;
	return span;
}