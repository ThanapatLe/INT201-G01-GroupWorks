import { products } from "./product.js";
import { AddToCart, cart } from "./add.js";  
import { CookieUtil } from "./cookie.js";
// import { changeStatus } from "./theme.js";

// let str = ""
export let inBody = document.querySelector("body");
export let divOut = document.createElement("div");
divOut.setAttribute("id","product");

export let qtyInNav = document.createElement("p");  //สร้าง tag ชื่อ p ในตัวแปร qty
qtyInNav.setAttribute("class","d-flex me-2");
qtyInNav.innerHTML = `Your Cart : ${CookieUtil.get("total") ||0} `;
// qtyInNav.innerHTML = `Your Cart : ${cart.total} `;

export let removeBut = document.createElement("button")
removeBut.setAttribute("class","btn btn-danger me-4")
removeBut.setAttribute("id","remove")
removeBut.innerHTML = `CLEAR <br> CART `;
removeBut.addEventListener("click",() => {
  CookieUtil.deleteAllCookies();
  // CookieUtil.unset("empty");
  window.location.reload();
})

// export let themeBut = document.createElement("button")
// themeBut.innerHTML = "DARK";
// themeBut.setAttribute("class","btn btn-dark me-4");
// themeBut.setAttribute("id","check");
// themeBut.addEventListener("click",() => {
//     changeStatus();
// })

function render(product){
  divOut.innerHTML = " ";
  let divInOut = document.createElement("div");
  divInOut.setAttribute("class","row");

for(let prod of product) {

  //   str = JSON.stringify(products[prod]);
  let divColIn = document.createElement("div");
  divColIn.setAttribute("class","col col-xxl-4");
  

  let divIn = document.createElement("div");
  divIn.setAttribute("class","card");
  divIn.setAttribute("style",
  "width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; ");
  let picInCard = document.createElement("img");
  picInCard.setAttribute("src",prod.img); 
//   pic.setAttribute("max-width","300px")
  picInCard.setAttribute("class","card-img-top");
  
  let divInCard = document.createElement("div");

  let pe = document.createElement("p");
  // pe.setAttribute("style","text-align: center;");

  divInCard.setAttribute("class","card-body");
  divInCard.setAttribute("style","text-align: center;");
//   dic.setAttribute("style","width : 350px ");
//   dic.setAttribute("style","margin : 10px");

  pe.innerHTML = `ID: ${prod.productId} <br>
  Name: ${prod.productName} <br>
  Description: ${prod.productDesc} <br>
  Price: ${prod.productPrice} <br>
  Stock: ${prod.stock}`;
   
  let butCard = document.createElement("button");
    butCard.setAttribute("id", prod.productId);
    butCard.setAttribute("class", "btn btn-outline-primary");
    butCard.innerHTML = "Add to Cart";

    let clicked = 0
    butCard.addEventListener("click", () => {
      clicked += 1
      console.log(clicked)
      if (clicked > prod.stock) {
        alert(`product : ${prod.productName} out of stock`);
        clicked -= 1
        console.log(clicked)
      } else {
        alert(`add product : ${prod.productName}, ID : ${butCard.id} to cart`);
        AddToCart(prod);
        qtyInNav.innerHTML = `Your Cart : ${CookieUtil.get("total")}`;
        // qtyInNav.innerHTML = `Your Cart : ${cart.total}`;
        
      };
    });
   
    divInCard.appendChild(pe);
    divInCard.appendChild(butCard);

  divIn.appendChild(picInCard);
  divIn.appendChild(divInCard);
  divColIn.appendChild(divIn);
  divInOut.appendChild(divColIn);
  divOut.appendChild(divInOut)
  inBody.appendChild(divOut);

}
}



render(products); //function render ที่รับ parameter เป็น products

export { render }; //export render เพื่อออกมาใช้ใน file อื่นได้