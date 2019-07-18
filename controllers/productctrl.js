window.addEventListener("load", init);
// var a = "<li>Hello</li>";
function init() {
	var products = productOperations.read();
	for (let pRoduct of products) {
		printProduct(pRoduct);
	}
	//  ul.innerHTML = a;
}

function printProduct(pRoduct) {
	var ul = document.getElementById('ul_productss');
	var li = document.createElement("li");
	li.appendChild(createImage(pRoduct.url));
	li.appendChild(createSpan(pRoduct.name, pRoduct.price));
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
