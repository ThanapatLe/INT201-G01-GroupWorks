import { themeBut} from "./productList.js";


if(localStorage.getItem('Mode') != 0 ){
    localStorage.setItem('Mode',0);
}

function changeStatus(){
    let box = document.querySelectorAll(".card");
    if(localStorage.getItem('Mode') == 0){//default web
        localStorage.setItem('Mode',1);
        themeBut.innerHTML = "WHITE";
        themeBut.setAttribute("class","btn btn-light me-4");
        document.querySelector("#navtop").setAttribute("class","navbar navbar-scroll navbar-expand-lg navbar-light bg-secondary");
        document.querySelector("#navtop").setAttribute("style","color: white");
        document.body.setAttribute("style","background-color: #282828; ");
        box.forEach(i => {
            i.setAttribute("style","width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; background-color:#787E7E ; color: white;");
        });
        
        // document.querySelector("#rowOfCard").setAttribute("style", "background-color: black;");
        // document.querySelector("#allCard").setAttribute("style",
        // "width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; background-color: black");
        // console.log(localStorage.getItem('Mode'));

    }else{//mode 2
        localStorage.setItem('Mode',0);
        themeBut.innerHTML = "DARK";
        themeBut.setAttribute("class","btn btn-dark me-4");
        document.querySelector("#navtop").setAttribute("class","navbar navbar-scroll navbar-expand-lg navbar-light bg-light");
        document.body.setAttribute("style","color:black; background-color: steelblue");
        document.querySelector("#navtop").setAttribute("style","color: black");
        box.forEach(i => {
            i.setAttribute("style","width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; background-color:white");
        });
        // document.querySelector("#rowOfCard").setAttribute("style","background-color: steelblue ");
        // document.querySelector("#allCard").setAttribute("style",
        // "width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; background-color: white");
    }
} 

export {changeStatus};

// export function changeStatus(){

//     if(localStorage.getItem('Mode') == 0){//default web
//         localStorage.setItem('Mode',1);
//         navbar1.setAttribute("class","navbar navbar-scroll navbar-expand-lg navbar-light bg-secondary");
//         // navbar1.setAttribute("style","color:white");
//         // divOut.setAttribute("style","color:white");
//         inBody.setAttribute("style","background-color: #282828; color:white");
//         document.querySelector("#allCard").setAttribute("style",
//         "width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; background-color: black ");

//         console.log(localStorage.getItem('Mode'));
//     }else{//mode 2
//         localStorage.setItem('Mode',0);
//         navbar1.setAttribute("class","navbar navbar-scroll navbar-expand-lg navbar-light bg-light");
//         inBody.setAttribute("style","background-color: steelblue; color:black");

//          document.querySelector("#allCard").setAttribute("style",
//         "width: 18rem ;min-width: 400px; max-width: 400px; min-height: 400px; max-height: 400px; margin: 20px 0px 0px 30px; padding: 20px; background-color: white ");
//     }
// } 
