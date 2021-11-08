export let cart = {
    prods: [],
    prodID: [],
    total: 0
}

export function Add(keyboard){
    if(!cart.prodID.includes(keyboard.productId)){ //includes() ใช้ในการเช็คว่าสิ่งที่อยู่ในวงเล็บมีอยู่ใน array ไหม}
        cart.prodID.push(keyboard.productId)
        cart.prods.push({prod: keyboard, qty: 0})
    } 
    cart.prods.forEach((p) => { // เช็คว่าสินค้าที่เข้ามามีแล้วหรือยังถ้ามีแล้วให้เพิ่มจำนวนเฉพาะของสินค้านั้นขึ้นอีก 1  และเพิ่มจำนวนสิ้นทั้งหมดเพิ่มอีก 1
        if(p.prod.productId == keyboard.productId){
            p.qty++
            cart.total++
            console.log(cart.prods,cart.total);
        }
    })

}
// import {products} from './product.js';

// export let cart = {
//     prod: [],
//     prodID: [],
//     total: 0
// }

// export function Add(keyboard){
//     if(!cart.prodID.includes(keyboard.productId)){ //includes() ใช้ในการเช็คว่าสิ่งที่อยู่ในวงเล็บมีอยู่ใน array ไหม}
//         cart.prodID.push(keyboard.productId)
//         cart.prod.push({prod: keyboard, qty: 0})
//     } 
//     cart.prod.forEach((prod) => { // เช็คว่าสินค้าที่เข้ามามีแล้วหรือยังถ้ามีแล้วให้เพิ่มจำนวนเฉพาะของสินค้านั้นขึ้นอีก 1  และเพิ่มจำนวนสิ้นทั้งหมดเพิ่มอีก 1
//         if(cart.prod.productId == keyboard.productId){
//             prod.qty++
//             cart.total++
//             console.log(cart.prod,cart.total)
//         }
//     })
// }