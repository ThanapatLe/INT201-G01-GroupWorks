import {products} from './product.js';
import {inBody, divOut, qtyInNav, render} from "./productList.js";

//navbar
let navbar1 = document.createElement("nav");
navbar1.setAttribute("id","navtop");
navbar1.setAttribute("class","navbar navbar-scroll navbar-expand-lg navbar-light bg-light");

//div of nav to control div in 
let divInDiv1 = document.createElement("div");
divInDiv1.setAttribute("class","container-fluid");

//div1 in navbar
let divInNav1 = document.createElement("div");
divInNav1.setAttribute("class","d-flex");

//all of component in div1 {
let picInNav1 = document.createElement("img");
picInNav1.setAttribute("id","search-icon");
picInNav1.setAttribute("src","search.png");
picInNav1.setAttribute("height","40px");

let formInNav1 = document.createElement("form");
formInNav1.setAttribute("id","form-search");
formInNav1.setAttribute("class","d-none");

let inputInNav1 = document.createElement("input");
inputInNav1.setAttribute("id","text-search");
inputInNav1.setAttribute("class","form-control");
inputInNav1.setAttribute("type","search");  
// inputInNav1.setAttribute("placeholder","Search");

let butInNav1 = document.createElement("a");
butInNav1.setAttribute("id","search-btn");
butInNav1.setAttribute("class","btn btn-outline-success")
butInNav1.setAttribute("type","submit");
butInNav1.innerHTML = "Search";
//}

//div2 in navbar
let divInNav2 = document.createElement("div");
divInNav2.setAttribute("class","d-flex");

//all of component in div2 {
let picInNav2 = document.createElement("img");
picInNav2.setAttribute("class","me-4");
picInNav2.setAttribute("id","cart-icon");
picInNav2.setAttribute("src","shopping-cart.png");
picInNav2.setAttribute("height","40px");

// let quantityInNav = document.createElement("p");  //สร้าง tag ชื่อ p ในตัวแปร qty
// quantityInNav.setAttribute("class","d-flex me-2");
// quantityInNav.innerHTML = `Your Cart : 0`;
//}

inBody.insertBefore(navbar1,divOut);

navbar1.appendChild(divInDiv1);

divInDiv1.appendChild(divInNav1);
divInNav1.appendChild(picInNav1);
divInNav1.appendChild(formInNav1);

formInNav1.appendChild(inputInNav1);
formInNav1.appendChild(butInNav1);

divInDiv1.appendChild(divInNav2);
divInNav2.appendChild(picInNav2);
divInNav2.appendChild(qtyInNav);

let icon = document.querySelector("#search-icon"); //ดึง Element ที่มีไอดีเป็น search-icon แล้วเก็บไว้ใน icon
let form = document.querySelector("#form-search"); //ดึง Element ที่มีไอดีเป็น form-search แล้วเก็บไว้ใน form
let btn_search = document.querySelector("#search-btn");//ดึง Element ที่มีไอดีเป็น search-btn แล้วเก็บไว้ใน btn_search
let text = document.querySelector("#text-search"); //ดึง Element ที่มีไอดีเป็น text-search แล้วเก็บไว้ใน text

icon.addEventListener("click", toggle);
btn_search.addEventListener("click",() => search(text.value));

let is_click = false;

function toggle() { //function toggle ซึ่งจะซ่อนอยู่โดยที่ถ้าคลิ๊กจะทำให้สิ่งที่ซ่อนอยู่นั้นแสดง
  is_click = !is_click;

  if (is_click) {
    text.innerHTML = " ";
    form.setAttribute("class",'d-flex');
  } else {
    form.setAttribute("class",'d-none');
  }
}


function search(text){ //function search ที่ทำการรับ parameter เป็น text โดยที่มีการเช็ค ถ้าหากสิ่งที่รับมาตรงกับสินค้าก็จะแสดงสินค้า 
    if(text.length != 0){
        let item = products.filter((p)=> p.productName.toLowerCase().includes(text.toLowerCase()));
        console.log(item);
        render(item);
    }
}

// console.log(text.innerHTML);
