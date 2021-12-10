import React from "react";
import {useDispatch} from "react-redux";
// import {change_username, add_person} from "../redux/setActions";
import {empty_cart} from "../redux/setActions";
import CartBox from "./CartBox";
import {useSelector} from "react-redux";
function Cart(){
    // const [obj, setObj]=React.useState({
    //     name:"",
    //     age:""
    // })
    //
    // const dispatch = useDispatch();
    // const handleSubmit = () => {
    //     dispatch(change_username("Bob"));
    // }
    // const handleChange = (event)=>{
    //     const newInput={
    //         ...obj,
    //         [event.target.name]: event.target.value
    //     }
    //     setObj(newInput);
    // }
    // const addPerson = () =>{
    //     dispatch(add_person(obj))
    // }
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const cartEles = cart.map((prod, idx)=>
        <CartBox key ={idx} data={prod}/>
    )
    const total = (cart) => {
        let add = 0;
        for (let i=0; i<cart.length; i++) {
            add = add + parseFloat(cart[i].price);
        }
        return add;
    }
    const purchase = () => {
        dispatch(empty_cart(cart));
    }
    return(
        <div>
            {/*<div>Home</div>*/}
            {/*<button onClick={handleSubmit}>Change Username</button>*/}
            {/*<input type="text" placeholder={"Name"} name={"name"} onChange={handleChange}/>*/}
            {/*<input type="text" placeholder={"Age"} name={"age"} onChange={handleChange}/>*/}
            {/*<button onClick={addPerson}>Submit Person</button>*/}
            {/*{obj.name}*/}
            <h1>total: ${parseFloat(total(cart)).toFixed(2)}</h1>
            <button onClick={purchase}>Purchase</button>
            {cartEles}
        </div>
    )
}
export default Cart;