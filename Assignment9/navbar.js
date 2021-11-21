import {products} from "./product.js";
import {CookieUtil} from "./cookie.js";
import {screenMode} from "./theme.js";

let navbar = document.querySelector("#nav-bar");

navbar.innerHTML = 
`<nav id='fnav' style="background-color:#445b6d">
<div class="justify-center max-w-7xl px-2 py-3 sm:px-6 lg:px-8 h-20">
        <div id="nav" class="mt-auto flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <!-- ตัวอักษร -->
        </div>
</div>
</nav>`;

let searchImg = document.createElement('button'); 
searchImg.setAttribute('id', 'searchImg');
searchImg.innerHTML = `<img class="mx-2 mt-2 h-8 w-auto" src="image/search.png" alt="search-icon">`;
searchImg.addEventListener('click',toggle)

let searchBox = document.createElement('input');
searchBox.setAttribute('type','text');
searchBox.setAttribute('id','searchInput');
searchBox.setAttribute('name','searchInput');
searchBox.setAttribute('placeholder','Search the product');
searchBox.setAttribute('class','shadow appearance-none border rounded w-200 h-10 mt-2 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'); //รอแก้จัดขนาดกล่องกรอกข้อความ
searchBox.addEventListener('keyup',()=>{
    let filtertxt = searchBox.value;
    let prodArr = document.querySelectorAll(".allCard");
  console.log(filtertxt);
  for (let i = 0; i < prodArr.length; i++) {
    let productName = products[i].productName;
    if (productName.toLowerCase().trim().includes(filtertxt.toLowerCase())) {
      prodArr[i].style.display = "";
    } else {
      prodArr[i].style.display = "none";
    }
  }
})
let cartImg = document.createElement('img');
cartImg.setAttribute('id','cartImg');
cartImg.setAttribute('src','./image/shopping-cart.png');
cartImg.setAttribute('class','mx-2 mt-2 h-8 w-auto absolute right-20');

export let totalCart = document.createElement('p');
totalCart.setAttribute('class','mt-1.5 absolute right-5');

let clearCartBtn = document.createElement('button'); 
clearCartBtn.setAttribute('id','clearBtn');
clearCartBtn.innerHTML = `<a style="color:black">Clear Cart</a>`;
clearCartBtn.setAttribute('class','mt-1 text-white font-bold py-2 px-4 rounded-full absolute right-40')
clearCartBtn.setAttribute('style','background-color:#d1c8bb; border-width:1px')
clearCartBtn.addEventListener('click',()=> {
    CookieUtil.deleteAllCookies();
    window.location.reload();
})

let modeButton = document.createElement('button');
modeButton.setAttribute('id','mode');
modeButton.innerHTML = 'Mode';
modeButton.setAttribute('class',' ml-5 mt-2 bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full h-10 w-auto inline-flex')
modeButton.addEventListener('click',screenMode)

let divNav = document.querySelector('#nav');

divNav.appendChild(searchImg);
divNav.appendChild(searchBox);
divNav.appendChild(cartImg);
divNav.appendChild(totalCart);
divNav.appendChild(clearCartBtn);
divNav.appendChild(modeButton)


 function toggle(){
  if (searchBox.style.display === "none") {
    searchBox.style.display = "";
  } else {
    searchBox.style.display = "none";
  }
 }