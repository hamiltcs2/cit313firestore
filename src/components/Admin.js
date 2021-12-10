import React from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {add_product} from "../redux/setActions";
import AdminBox from "./AdminBox";
import { useValidateImageURL } from "use-validate-image-url";
function Admin(){
    const [url, setURL] = React.useState('');
    const status = useValidateImageURL(url);
    const [obj, setObj]=React.useState({
        name:"",
        price:"",
        stock:"",
        image:""
    })
    const products = useSelector(state => state.products);
    let adminEles = products.map((prod, idx)=>
        <AdminBox key ={idx} data={prod}/>
    )
    const dispatch = useDispatch();
    const handleChange = (event)=>{
        if (event.target.id === "image") {
            setURL(event.target.value);
        }
        const newInput={
            ...obj,
            [event.target.name]: event.target.value
        }
        setObj(newInput);
    }
    const addProduct = () =>{
        if(obj.name !== "" && obj.price !== "" && obj.stock !== "" && obj.image !== "") {
            if (status !== "valid") {
                //obj.image = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            dispatch(add_product(obj))
        }
    }
    return(
        <div>
            <div>Admin</div>
            <input type="text" placeholder={"Name"} name={"name"} onChange={handleChange}/>
            <input type="text" placeholder={"Price"} name={"price"} onChange={handleChange}/>
            <input type="text" placeholder={"Stock"} name={"stock"} onChange={handleChange}/>
            <input type="text" placeholder={"Image"} name={"image"} onChange={handleChange}/>
            <button onClick={addProduct}>Submit Product</button>
            <div>
                {adminEles}
            </div>
        </div>
    )
}
export default Admin;