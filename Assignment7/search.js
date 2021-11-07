import {products} from './product.js';
import {render} from './productList.js';
let icon = document.querySelector("#search-icon");
let form = document.querySelector('#form-search');
let btn_search = document.querySelector('#search-btn');
let text = document.querySelector('#text-search');
icon.addEventListener("click", toggle);
btn_search.addEventListener("click",() => search(text.value));
let is_click = false;
function toggle() {
  is_click = !is_click;
  if (is_click) {
    text.innerHTML = " ";
    form.setAttribute("class",'');
  } else {
    form.setAttribute("class",'d-none');
  }
}
function search(text){
    if(text.length != 0){
        let item = products.filter((p)=> p.productName.toLowerCase().includes(text.toLowerCase()));
        // console.log(item);
        render(item);
    }
}

