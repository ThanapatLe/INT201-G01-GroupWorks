
if(localStorage.getItem('Mode') != 0 ){
    localStorage.setItem('Mode',0);
}
let navbar1 = document.getElementById("navtop");

export function changeStatus(){
    if(localStorage.getItem('Mode') == 0){//default web
        localStorage.setItem('Mode',1);
        navbar1.style.backgroundColor = "red"
        document.body.style.backgroundColor = "#282828";

        console.log(localStorage.getItem('Mode'));
    }else{//mode 2
        localStorage.setItem('Mode',0);
        navbar1.style.backgroundColor = "white";
        document.body.style.backgroundColor = "white";
    }
} 
