import { totalCart } from "./navbar.js";
import { CookieUtil } from "./cookie.js"; 


if (localStorage.getItem('Mode') != 0) {
    localStorage.setItem('Mode', 0);
}

export function screenMode() {
    let modeButton = document.querySelector('#mode');
    let navbar = document.querySelector('#fnav');
    let clearButton = document.querySelector('#clearBtn');
    let allAdd = document.querySelectorAll('.allAdd');
    let allCard = document.querySelectorAll('.allCard');
    let des = document.querySelectorAll('.details');
  
    if (localStorage.getItem('Mode') == 0) {
        modeButton.setAttribute('class', 'ml-5 mt-2 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full h-10 w-auto inline-flex')
        navbar.setAttribute('style','background-color:#864879');
        clearButton.setAttribute('style','background-color:#E9A6A6; border-width:1px;');
        clearButton.innerHTML =  `<a style="color:black">Clear Cart</a>`;
        totalCart.innerHTML = `<p class="mt-1.5" style="color:black"><b>total : ${CookieUtil.get("total") || 0}</b></p>`;

        allAdd.forEach((add) => {
            add.setAttribute('style','background-color:#E9A6A6');
        }) 
        allCard.forEach((card) => {
            card.setAttribute('style','background-color:#1F1D36');
        }) 
        des.forEach((allDes)=> {
            allDes.setAttribute('style','color:white');
        })
        
        document.body.style.backgroundColor = "#3F3351";
        localStorage.setItem('Mode', 1);
    } else {
        modeButton.setAttribute('class', 'ml-5 mt-2 bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full h-10 w-auto inline-flex')
        navbar.setAttribute('style','background-color:#445b6d');
        clearButton.setAttribute('style','background-color:#d1c8bb; border-width:1px');
        clearButton.innerHTML =  `<a style="color:black">Clear Cart</a>`;
        totalCart.innerHTML = `<p class="mt-1.5" style="color:white"><b>total : ${CookieUtil.get("total") || 0}</b></p>`;
            
        allAdd.forEach((add) => {
            add.setAttribute('style','background-color:#9db2c5;color:white') 
        })
        allCard.forEach((card) => {
            card.setAttribute('style','background-color:#f2ede4');
        }) 
        des.forEach((allDes)=> {
            allDes.setAttribute('style','color:black');
        })
        document.body.style.backgroundColor = "#dcdedd";
        localStorage.setItem('Mode', 0);
    }
}