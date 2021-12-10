export const change_username=(nme)=>{
    return{
        type:"change_username",
        username:nme
    }
}
export const add_person=(person)=>{
    return{
        type:"add_person",
        person:person
    }
}
export const add_product=(product)=>{
    return{
        type:"add_product",
        product:product
    }
}
export const add_cart=(cart)=>{
    return{
        type:"add_cart",
        cart:cart
    }
}
export const remove_cart=(cart)=>{
    return{
        type:"remove_cart",
        cart:cart
    }
}
export const empty_cart=(cart)=>{
    return{
        type:"empty_cart",
        cart:cart
    }
}
export const edit_item=(item)=>{
    return{
        type:"edit_item",
        item:item
    }
}