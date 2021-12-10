const initState = {
    currUser: "Luke",
    tags: [],
    products: [
        {
            id: 1,
            name: "Drums",
            price: "2.99",
            stock: 15,
            image: "https://i5.walmartimages.com/asr/b6ff5c95-6b63-435b-8969-74ac3245964c_1.b10948c90c80e1ba9146ee8b4ba9b66d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
        },
        {
            id: 2,
            name: "Flute",
            price: "3.99",
            stock: 13,
            image: "https://i5.walmartimages.com/asr/76db142e-164e-4d84-8b83-829770bd7599_1.e9a51b527600f0ef2c07278b4b8c0ec3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },
        {
            id: 3,
            name: "Guitar",
            price: "4.99",
            stock: 7,
            image: "https://i5.walmartimages.com/asr/fe16c85a-1be3-4802-88c9-a15cece702fa.eca4561f28247f640eae75075fe255c5.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        },
        {
            id: 4,
            name: "Piano",
            price: "5.99",
            stock: 0,
            image: "https://i5.walmartimages.com/asr/b693fec1-d3ce-4394-bbec-50b1074184c1_1.663c0d0fea7bdad70c6afcc6d02fe5a9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
        }
    ],
    cart: []
}

const rootReducer = (state= initState, action) => {
    if (action.type === 'change_username'){
        return {
            ...state,
            currUser: action.username
        }
    }
    if (action.type === 'add_person'){
        let newArray=state.tags;
        newArray.push(action.person);
        return {
            ...state,
            tags: newArray
        }
    }
    if (action.type === 'add_product'){
        let newArray=state.products;
        newArray.push({
            id: state.products.length,
            name: action.product.name,
            price: action.product.price,
            stock: action.product.stock,
            image: action.product.image,
        });
        return {
            ...state,
            products: newArray
        }
    }
    if (action.type === 'add_cart'){
        let newArray=state.cart;
        newArray.push({
            name: action.cart.name,
            price: action.cart.price,
            stock: action.cart.stock,
            image: action.cart.image,
            listID: state.cart.length
        });
        return {
            ...state,
            cart: newArray
        }
    }
    if (action.type === 'remove_cart'){
        let newArray=state.cart.filter(element => element.listID !== action.cart.listID);
        return {
            ...state,
            cart: newArray
        }
    }
    if (action.type === 'edit_item'){
        console.log(action.item);
        let newArray=[]
        for(let i=0; i<state.products.length; i++) {
            if (state.products[i].id === action.item.id) {
                newArray.push(action.item);
            }
            else{
                newArray.push(state.products[i]);
            }
        }
        return {
            ...state,
            products: newArray
        }
    }
    if (action.type === 'empty_cart'){
        let newArray=[]
        for(let i=0; i< state.products.length; i++){
            let stockReduction = 0;
            for(let j=0; j<action.cart.length; j++){
                if(state.products[i].name === action.cart[j].name) {
                    stockReduction++;
                }
            }
            newArray.push({
                id: state.products[i].id,
                name: state.products[i].name,
                price: state.products[i].price,
                stock: state.products[i].stock-stockReduction,
                image: state.products[i].image,

            })
        }
        let emptyArray=[];
        return {
            ...state,
            products: newArray,
            cart: emptyArray
        }
    }
    return state;
}

export default rootReducer;