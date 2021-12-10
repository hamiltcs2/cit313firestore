import React, {useState} from "react";
import {add_cart} from "../redux/setActions";
import {useDispatch} from "react-redux";
import PopUp from "./PopUp";
function Box(props) {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const addCart = () =>{
        dispatch(add_cart(props.data));
    }
    const popUp = () =>{
        setIsOpen(!isOpen);
    }
    const lowerStock = (stock) =>{
        if (stock > 10) {
            return "product"
        } else {
            return "LowStock"
        }
    }
    return (
        <div>
            <div className={lowerStock(props.data.stock)}>
                <div onClick={popUp}>
                    <div>{props.data.name}</div>
                    <div>${props.data.price}</div>
                    <div>Stock: {props.data.stock}</div>
                    <img src={props.data.image} alt={props.data.name}/>
                </div>
                {props.data.stock > 0 && <button onClick={addCart}>Add to Cart</button>}
            </div>
            <div onClick={popUp}>
                {isOpen && <PopUp data={props.data}></PopUp>}
            </div>
        </div>
    )
}
export default Box;
