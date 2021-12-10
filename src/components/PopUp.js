import React from "react";
import {add_cart} from "../redux/setActions";
import {useDispatch} from "react-redux";
function PopUp(props) {
    const dispatch = useDispatch();
    const addCart = () =>{
        dispatch(add_cart(props.data))
    }
    return (
        <div className ="popUp">
            <div>{props.data.name}</div>
            <div>{props.data.price}</div>
            <div>{props.data.stock}</div>
            <img src={props.data.image} alt={props.data.name}/>
            {props.data.stock > 0 && <button onClick={addCart}>Add to Cart</button>}
        </div>
    )
}
export default PopUp;