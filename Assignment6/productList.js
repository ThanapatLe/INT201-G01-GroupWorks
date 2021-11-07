import { products } from "./product.js"; 	//เรียกใช้ obj จาก "src",prod.img.js

// let str = ""
const Pro = document.querySelector("#product"); //ดึง Element ที่มีไอดีเป็น  product แล้วเก็บไว้ใน Pro
for (let prod of products) {			//วนลูป products แล้วเก็บค่าใน prod
  //   str = JSON.stringify(products[prod]);
  
  let pic = document.createElement("img");	//สร้าง tag ชื่อ img ในตัวแปร pic 
  pic.setAttribute("src",prod.img); 		//ให้  pic มี Attribute ที่ชื่อ src ให้มีค่าเท่ากับ prod.img (เอารูปมาจาก Obj products)
//   pic.setAttribute("max-width","300px")
  pic.setAttribute("class","card-img-top")	//ให้ pic มี Attribute ที่ชื่อ class ให้มีค่าเท่ากับ card-img-top
  
  let dic = document.createElement("div");	//สร้าง tag ชื่อ div ในตัวแปร dic 
  let pe = document.createElement("p");		//สร้าง tag ชื่อ p ในตัวแปร pe
  dic.setAttribute("class","card");		//ให้ dic มี Attribute ที่ชื่อ class ให้มีค่าเท่ากับ card
//   dic.setAttribute("style","width : 350px ");
//   dic.setAttribute("style","margin : 10px");

//ใน tag ชื่อ p ตัวแปร pe ให้แสดงข้อความ ID: Id ของ  Obj products แล้วขึ้นบรรทัดใหม่
//ให้แสดงข้อความ Name: ชื่อของ  Obj products แล้วขึ้นบรรทัดใหม่
//ให้แสดงข้อความ Description: คำอธิบายของ  Obj products แล้วขึ้นบรรทัดใหม่
//ให้แสดงข้อความ Price: ราคาของ  Obj products แล้วขึ้นบรรทัดใหม่
//ให้แสดงข้อความ Stock: จำนวนสินค้าของ  Obj products
  pe.innerHTML = `ID: ${prod.productId} <br>	
  Name: ${prod.productName} <br>		
  Description: ${prod.productDesc} <br>		
  Price: ${prod.productPrice} <br>		
  Stock: ${prod.stock} <br>`;
  
  let but = document.createElement("button");
  but.innerHTML = "add to chart";
  but.addEventListener("click",() => {
    alert(`add product ${prod.productName} to chart`);
    prod.stock--;
  });
  
  Pro.appendChild(but);
  dic.appendChild(pe);  			//นำ tag ชื่อ p ของตัวแปร pe ไปไว้ใน tag ชื่อ div ของตัวแปร dic
  dic.insertBefore(pic,pe);			//นำ tag ชื่อ img ของตัวแปร pic ไปไว้ก่อน tag ชื่อ p ของตัวแปร pe ใต้  tag ชื่อ div ของตัวแปร dic
  Pro.appendChild(dic);				//นำ tag ชื่อ div ของตัวแปร dic ไปไว้ใน tag ที่มีไอดีเป็น product ของตัวแปร Pro
}

