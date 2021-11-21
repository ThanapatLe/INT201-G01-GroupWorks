import { products } from "./product.js";
import { totalCart } from "./navbar.js";
import { CookieUtil } from "./cookie.js";





const display = document.querySelector("#product")
let cart = [];
let total = CookieUtil.get("total");
totalCart.innerHTML = `<p class="mt-1" style="color:white"><b>total : ${CookieUtil.get("total") || 0}</b></p>`;
for(let prod of products){

  let divProd = document.createElement("div"); 

  divProd.setAttribute("class","max-w-sm rounded-xl overflow-hidden shadow-lg m-8 p-3 text-center allCard");
  divProd.setAttribute('style','background-color:#f2ede4');
  
  divProd.setAttribute("id",`${prod.productId}`);  

let prodImg = document.createElement("img");
  prodImg.setAttribute("src",prod.img); 
 

let divDetail = document.createElement("div");
divDetail.setAttribute('class','px-6 py-4 details')

  divDetail.innerHTML = 
  `<p id="prodId">ID: ${prod.productId}</p>
  <p id="prodName">Name: ${prod.productName}</p>
  <p>Description: ${prod.productDesc}</p>
  <p>Price: ${prod.productPrice}</p>
  <p>Stock: ${prod.stock}</p>`;
  
  let addButton = document.createElement("button");
  addButton.textContent = 'Add to Cart';
  addButton.setAttribute('id',`${prod.productId}`);
  addButton.setAttribute('class','font-bold py-2 px-4 rounded-full allAdd');
  addButton.setAttribute('style','background-color:#9db2c5;color:white')
  
  let Added = 0 ;
  addButton.addEventListener('click',()=>{
    Added ++;
    if (Added > prod.stock) {
      alert(`[ product : ${prod.productName} ] out of stock`);
      Added -= 1;
      console.log(`clicked : ${Added}`)
    } else {
      alert(`add [ product : ${prod.productName} ] to cart`);
      const productId = prod.productId;
      const duplicateProd = cart.find(cartItem => cartItem.productId == productId);
      if(duplicateProd){
          duplicateProd.qty++;
      }else{
        cart.push({ productId ,qty:1});
      }
        console.log(cart);
        CookieUtil.set("total",++total);
        CookieUtil.set("items",JSON.stringify(cart));
      console.log(`clicked : ${Added}`)
      totalCart.innerHTML = `<p class="mt-1" style="color:white"><b>total : ${CookieUtil.get("total") || 0}</b></p>`;
    }
  }
  );
  
  
  
display.appendChild(divProd);
divProd.appendChild(prodImg);  
divProd.appendChild(divDetail);
divProd.appendChild(addButton);


}







