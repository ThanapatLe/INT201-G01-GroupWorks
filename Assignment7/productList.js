import { products } from "./product.js";
import { Add, cart } from "./add.js";
// let str = ""
const Pro = document.querySelector("#product");


//รถเข็น
let nav = document.getElementById("head")
let yourCart = document.createElement("img")
yourCart.setAttribute("src", "shopping-cart.png")
yourCart.setAttribute("width", "40px")
let qty = document.createElement("p")
qty.innerHTML = `Your Cart : 0`

nav.appendChild(yourCart)
nav.appendChild(qty)


function render(product) {
  Pro.innerHTML = " ";
  const divRow = document.createElement("div");
  divRow.setAttribute("class", "row");


  product.forEach(keyboard => {
    let pic = document.createElement("img");
    pic.setAttribute("src", keyboard.img);
    //   pic.setAttribute("max-width","300px")
    // pic.setAttribute("class","card-img-top")

    let divCol = document.createElement("div");
    divCol.setAttribute("class", "card")
    let pe = document.createElement("p");
    //   dic.setAttribute("style","width : 350px ");
    //   dic.setAttribute("style","margin : 10px");


    pe.innerHTML = `ID: ${keyboard.productId} <br>	
  Name: ${keyboard.productName} <br>		
  Description: ${keyboard.productDesc} <br>		
  Price: ${keyboard.productPrice} <br>		
  Stock: ${keyboard.stock}`;

    //ปุ่ม add
    let but = document.createElement("button");
    but.setAttribute("id", keyboard.productId)
    but.innerHTML = "Add to cart";
    let clicked = 0
    but.addEventListener("click", () => {
      clicked += 1
      console.log(clicked)
      if (clicked > keyboard.stock) {
        alert(`product : ${keyboard.productName} out of stock`);
        clicked -= 1
        console.log(clicked)
      } else {
        alert(`add product : ${keyboard.productName}, ID : ${but.id} to chart`);
        Add(keyboard)
        qty.innerHTML = `Your Cart : ${cart.total}`
      };
    });


    divRow.appendChild(divCol)
    divCol.appendChild(pe);
    divCol.insertBefore(pic, pe);
    Pro.appendChild(divRow);
    divCol.appendChild(but);




  });
}

render(products);

export { render };