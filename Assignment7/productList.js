import { products } from "./product.js";  //เรียกใช้ obj จาก "src",prod.img.js
import { Add, cart } from "./add.js";     //ดึง Element ที่มีไอดีเป็น  product แล้ว
import { CookieUtil } from "./cookie.js";

// let str = ""
const Pro = document.querySelector("#product"); //ดึง Element ที่มีไอดีเป็น  product แล้ว


//รถเข็น
let nav = document.getElementById("head") //ดึง Element ที่มีไอดีเป็น head แล้วเก็บไว้ใน nav
let yourCart = document.createElement("img") //สร้าง tag ชื่อ img ในตัวแปร youCart
yourCart.setAttribute("src", "shopping-cart.png") //ให้  youCart มี Attribute ที่ชื่อ id ให้มีค่าเท่ากับ scart
yourCart.setAttribute("width", "40px")  //ให้ youCart มี Attribute ที่ชื่อ width ให้มีค่าเท่ากับ 40px
let qty = document.createElement("p")  //สร้าง tag ชื่อ p ในตัวแปร qty
// qty.innerHTML = `Your Cart : 0` //สร้าง Inner HTML ขึ้นมาเป็น `Your Cart : 0`
qty.innerHTML = `Your Cart : ${CookieUtil.get("total") ||0}` //สร้าง Inner HTML ขึ้นมาเป็น `Your Cart : 0`
let removeBut = document.createElement("button")
removeBut.setAttribute("id","remove")
removeBut.addEventListener("click",() => {
  CookieUtil.deleteAllCookies();
  window.location.reload();
})

nav.appendChild(yourCart) //นำ tag ของตัวแปร youCart ไปไว้ใน tag ของตัวแปร nav
nav.appendChild(qty) //นำ tag ของตัวแปร qty ไปไว้ใน tag ของตัวแปร nav
nav.appendChild(removeBut)

function render(product) { // function render ที่มี parameter product ที่สร้าง tag div มี class เป็น row
  Pro.innerHTML = " ";
  const divRow = document.createElement("div");
  divRow.setAttribute("class", "row");

  product.forEach(keyboard => { // parameter product ที่รับมาทำการ foreach ออกมาเพื่อแสดงค่าของ parameterที่รับมา
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
    but.setAttribute("id", keyboard.productId);
    but.setAttribute("class", "btn btn-primary");
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
        alert(`add product : ${keyboard.productName}, ID : ${but.id} to cart`);
        Add(keyboard)
        qty.innerHTML = `Your Cart : ${CookieUtil.get("total")}`

      };
    });


    divRow.appendChild(divCol) //นำ tag ของตัวแปร divCol ไปไว้ใน tag ของตัวแปร divRow
    divCol.appendChild(pe); //นำ tag ของตัวแปร pe ไปไว้ใน tag ของตัวแปร divCol
    divCol.insertBefore(pic, pe); //นำ tag ของตัวแปร pic ไปไว้ก่อน tag ของตัวแปร pe ใต้ tag ของตัวแปร divCol
    Pro.appendChild(divRow); //นำ tag ของตัวแปร divRow ไปไว้ใน tag ของตัวแปร Pro
    divCol.appendChild(but); //นำ tag ของตัวแปร but ไปไว้ใน tag ของตัวแปร divCol




  });
}

render(products); //function render ที่รับ parameter เป็น products

export { render }; //export render เพื่อออกมาใช้ใน file อื่นได้