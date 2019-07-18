const productControl = {
products:[],

read(){

    for(let i= 0; i<=10; i++)    {
        let productCreate = new  ProductInfo( i,"Nokia "+i,888*i );
        this.products.push(productCreate);
    }
    console.log('All Products are ',this.products);
 return this.products;

},

search(){

// var productSearch = this.products;
// return productSearch;
} 

}