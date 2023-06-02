const getProducts=()=>{
  return  fetch('https://dummyjson.com/products?limit=8')
.then(response => response.json())
.then(response=>response)
.catch(error=>error)
}

getProducts();


const productContainer=document.getElementById('products');
const displayProducts=async()=>{
  const products=await getProducts();
  console.log({products});
  products.products.map(product=>{
    let div=document.createElement('div');
    let image=document.createElement('img');
    let title=document.createElement('h5');
    let rate=document.createElement('p');
    let price=document.createElement('p');
  image.src=product.thumbnail;
  title.innerHTML=product.title;
  rate.innerHTML=product.rate; 
  price.innerHTML=product.price;  
  div.appendChild(image);
  div.appendChild(title);
  div.appendChild(rate);
  div.appendChild(price);
  div.setAttribute('key',product.id);
   div.setAttribute('class','items');
productContainer.appendChild(div);
});
};
displayProducts();