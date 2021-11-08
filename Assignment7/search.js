import {products} from './product.js';
import {render} from './productList.js';
let icon = document.querySelector("#search-icon"); //ดึง Element ที่มีไอดีเป็น search-icon แล้วเก็บไว้ใน icon
let form = document.querySelector('#form-search'); //ดึง Element ที่มีไอดีเป็น form-search แล้วเก็บไว้ใน form
let btn_search = document.querySelector('#search-btn');//ดึง Element ที่มีไอดีเป็น search-btn แล้วเก็บไว้ใน btn_search
let text = document.querySelector('#text-search'); //ดึง Element ที่มีไอดีเป็น text-search แล้วเก็บไว้ใน text
icon.addEventListener("click", toggle);
btn_search.addEventListener("click",() => search(text.value));
let is_click = false;
function toggle() { //function toggle ซึ่งจะซ่อนอยู่โดยที่ถ้าคลิ๊กจะทำให้สิ่งที่ซ่อนอยู่นั้นแสดง
  is_click = !is_click;
  if (is_click) {
    text.innerHTML = " ";
    form.setAttribute("class",'');
  } else {
    form.setAttribute("class",'d-none');
  }
}
function search(text){ //function search ที่ทำการรับ parameter เป็น text โดยที่มีการเช็ค ถ้าหากสิ่งที่รับมาตรงกับสินค้าก็จะแสดงสินค้า 
    if(text.length != 0){
        let item = products.filter((p)=> p.productName.toLowerCase().includes(text.toLowerCase()));
        // console.log(item);
        render(item);
    }
}

