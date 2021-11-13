import { CookieUtil } from "/cookie.js";
export let cart = { //export cart ออกไปเพื่อใช้งานใน file อื่น
    prods: [],
    prodID: [],
    total: 0
}


export function Add(keyboard){
    if(!cart.prodID.includes(keyboard.productId)){ //includes() ใช้ในการเช็คว่าสิ่งที่อยู่ในวงเล็บมีอยู่ใน array ไหม}
        cart.prodID.push(keyboard.productId)
        cart.prods.push({prod: keyboard, qty: 0})
        CookieUtil.set(keyboard.productName,'')
        // CookieUtil.set("prodId",keyboard.productId)
    } 
    cart.prods.forEach((p) => { // เช็คว่าสินค้าที่เข้ามามีแล้วหรือยังถ้ามีแล้วให้เพิ่มจำนวนเฉพาะของสินค้านั้นขึ้นอีก 1  และเพิ่มจำนวนสิ้นทั้งหมดเพิ่มอีก 1
        if(p.prod.productId == keyboard.productId){
            p.qty++
            cart.total++
            CookieUtil.set("total",cart.total)
            CookieUtil.set(keyboard.productName,p.qty)
            // localStorage.setItem("CartNumber",cart.total++)
            console.log(cart.prods,cart.total);
        }
    })
}