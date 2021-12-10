import React from "react";
import {remove_cart} from "../redux/setActions";
import {useDispatch} from "react-redux";
function CartBox(props) {
    const dispatch = useDispatch();
    const removeCart = () =>{
        console.log(props.data);
        dispatch(remove_cart(props.data))
    }
    return (
        <div className ="product">
            <div>{props.data.name}</div>
            <div>{props.data.price}</div>
            <div>{props.data.stock}</div>
            <img src={props.data.image} alt={props.data.name}/>
            <button onClick={removeCart}>Remove From Cart</button>
        </div>
    )
}
export default CartBox;