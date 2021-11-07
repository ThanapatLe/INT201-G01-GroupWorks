import { products } from "./product.js";

// let str = ""
const Pro = document.querySelector("#product");

function render(array){
  Pro.innerHTML = " ";
  const divOut = document.createElement("div");
  divOut.setAttribute("class","row");
  array.forEach(el => {
    let pic = document.createElement("img");	
  pic.setAttribute("src",el.img); 
//   pic.setAttribute("max-width","300px")
  // pic.setAttribute("class","card-img-top")
  
  let dic = document.createElement("div");
  dic.setAttribute("class","col card")
  let pe = document.createElement("p");
  // dic.setAttribute("class","card");
//   dic.setAttribute("style","width : 350px ");
//   dic.setAttribute("style","margin : 10px");

// Description: ${el.productDesc} <br>		

  pe.innerHTML = `ID: ${el.productId} <br>	
  Name: ${el.productName} <br>		
 
  Price: ${el.productPrice} <br>		
  Stock: ${el.stock}`;			
  
  divOut.appendChild(dic)
  dic.appendChild(pe);
  dic.insertBefore(pic,pe);
  Pro.appendChild(divOut);
  });
}
render(products);

export{render};

// import { products } from "./product.js"; 	//เรียกใช้ obj จาก "src",prod.img.js

// // let str = ""
// const Pro = document.querySelector("#product"); //ดึง Element ที่มีไอดีเป็น  product แล้วเก็บไว้ใน Pro

// const divOut = document.createElement("div");
// divOut.setAttribute("class","row");

// for (let prod of products) {			//วนลูป products แล้วเก็บค่าใน prod
//   //   str = JSON.stringify(products[prod]);
  
//   let pic = document.createElement("img");	//สร้าง tag ชื่อ img ในตัวแปร pic 
//   pic.setAttribute("src",prod.img); 		//ให้  pic มี Attribute ที่ชื่อ src ให้มีค่าเท่ากับ prod.img (เอารูปมาจาก Obj products)
// //   pic.setAttribute("max-width","300px")
//   // pic.setAttribute("class","card-img-top")	//ให้ pic มี Attribute ที่ชื่อ class ให้มีค่าเท่ากับ card-img-top
  
//   let dic = document.createElement("div");	//สร้าง tag ชื่อ div ในตัวแปร dic 
//   dic.setAttribute("class","col-4")
//   let pe = document.createElement("p");		//สร้าง tag ชื่อ p ในตัวแปร pe
//   dic.setAttribute("class","card");		//ให้ dic มี Attribute ที่ชื่อ class ให้มีค่าเท่ากับ card
// //   dic.setAttribute("style","width : 350px ");
// //   dic.setAttribute("style","margin : 10px");

// //ใน tag ชื่อ p ตัวแปร pe ให้แสดงข้อความ ID: Id ของ  Obj products แล้วขึ้นบรรทัดใหม่
// //ให้แสดงข้อความ Name: ชื่อของ  Obj products แล้วขึ้นบรรทัดใหม่
// //ให้แสดงข้อความ Description: คำอธิบายของ  Obj products แล้วขึ้นบรรทัดใหม่
// //ให้แสดงข้อความ Price: ราคาของ  Obj products แล้วขึ้นบรรทัดใหม่
// //ให้แสดงข้อความ Stock: จำนวนสินค้าของ  Obj products
//   pe.innerHTML = `ID: ${prod.productId} <br>	
//   Name: ${prod.productName} <br>		
//   Description: ${prod.productDesc} <br>		
//   Price: ${prod.productPrice} <br>		
//   Stock: ${prod.stock}`;			
  
//   divOut.appendChild(dic)
//   dic.appendChild(pe);  			//นำ tag ชื่อ p ของตัวแปร pe ไปไว้ใน tag ชื่อ div ของตัวแปร dic
//   dic.insertBefore(pic,pe);			//นำ tag ชื่อ img ของตัวแปร pic ไปไว้ก่อน tag ชื่อ p ของตัวแปร pe ใต้  tag ชื่อ div ของตัวแปร dic
//   Pro.appendChild(divOut);				//นำ tag ชื่อ div ของตัวแปร dic ไปไว้ใน tag ที่มีไอดีเป็น product ของตัวแปร Pro
// }