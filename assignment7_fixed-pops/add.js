    import { CookieUtil } from "./cookie.js";
    export let cart = {
        prods: [],
        prodID: [],
        // total:0
        total: CookieUtil.get("total")
    }

    export function AddToCart(keyboard){
        if(!cart.prodID.includes(keyboard.productId)){
            cart.prodID.push(keyboard.productId)
            cart.prods.push({prod: keyboard, qty:0})
            
            // CookieUtil.set(keyboard.productName,'')
        }
        for(let newProduct of cart.prods){
            if(newProduct.prod.productId == keyboard.productId){
                newProduct.qty++
                cart.total++
                // CookieUtil.set(keyboard.productName,p.qty)
                // console.log(cart.prods,cart.total);
                CookieUtil.set(`${newProduct.prod.productName}`, newProduct.qty , Date(6000));
                CookieUtil.set("total",cart.total)
            }
        };
    }