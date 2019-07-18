window.addEventListener("load", init);
function init() {
	var produts_read = productControl.read();
	for (let pRoduct of produts_read) {
		printProducts(pRoduct);
	}
}
function printProducts(pRoduct) {
	var ul = document.getElementById('product-list');
	var li = document.createElement("li");
	li.appendChild(createList(pRoduct.name, pRoduct.price));
	ul.appendChild(li);
}
function createList(name, price) {
	var span = document.createElement('span');
	span.innerText = name + " - " + price;
	return span;
}



// window.addEventListener("load", showPrice);
// function showPrice(search_price) {
// var search_price = document.getElementById('price_input').value;
// var price_search = productControl.read();
// for (let pRoduct of price_search) {

// if(search_price == printPrice(pRoduct))
// printPrice(pRoduct);
// }
// else{}
// // alert('price_val'+ price_val);
// }


// function printPrice(pRoduct) {
// var search_result = document.getElementById('search-result');
// var p = document.createElement("p");

// p.appendChild(price_compare( pRoduct.name,pRoduct.price));
// search_result.appendChild(p);

// var price_val = document.getElementById('price_input').value;

// }

// function printPrice(pRoduct) {
//     var search_result = document.getElementById('search-result');
//     var p = document.createElement("p");
    
//     p.appendChild(price_compare( pRoduct.name,pRoduct.price));
//     search_result.appendChild(p);
    
//     var price_val = document.getElementById('price_input').value;
    
//     // if (price_val == price_compare( pRoduct.price)) {
//     // p.appendChild(price_compare( pRoduct.price));
//     // search_result.appendChild(p);
//     // alert('price_val'+ price_val);
//     // }
//     }


// function price_compare(name, price) {
// var span = document.createElement('span');
// span.innerText = name + " and " + price;
// return span;
// // else {
// // 	var span = document.createElement('span');
// // 	span.innerText = name + " and " + price;
// // 	return span;
// // }
// }
