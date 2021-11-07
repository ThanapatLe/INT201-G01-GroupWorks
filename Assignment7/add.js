import {products} from './product.js';

export let cart = {
    prod: [],
    prodID: [],
    total: 0
}

export function Add(keyboard){
    if(!cart.prodID.includes(keyboard.productID)){ //includes() ใช้ในการเช็คว่าสิ่งที่อยู่ในวงเล็บมีอยู่ใน array ไหม}
        cart.prodID.push(keyboard.productID)
        cart.prod.push({prod: keyboard, qty: 0})
    } 
    cart.prod.forEach((prod) => { // เช็คว่าสินค้าที่เข้ามามีแล้วหรือยังถ้ามีแล้วให้เพิ่มจำนวนเฉพาะของสินค้านั้นขึ้นอีก 1  และเพิ่มจำนวนสิ้นทั้งหมดเพิ่มอีก 1
        if(cart.prod.productID == keyboard.productID){
            prod.qty++
            cart.total++
            console.log(cart.prod,cart.total)
        }
    })
}