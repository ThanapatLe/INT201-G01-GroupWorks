export let cart = {
    prods: [],
    prodID: [],
    total:0
}

export function AddToCart(keyboard){
    if(!cart.prodID.includes(keyboard.productId)){
        cart.prodID.push(keyboard.productId)
        cart.prods.push({prod: keyboard, qty:0})
    }
    for(let newProduct of cart.prods){
        if(newProduct.prod.productId == keyboard.productId){
            newProduct.qty++
            cart.total++
            console.log(cart.prods,cart.total);
        }
    }
}