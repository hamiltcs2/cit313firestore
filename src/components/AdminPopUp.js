import React from "react";
import {edit_item} from "../redux/setActions";
import {useDispatch} from "react-redux";
import { useValidateImageURL } from "use-validate-image-url";
function AdminPopUp(props) {
    const [url, setURL] = React.useState('');
    const status = useValidateImageURL(url);
    const [obj, setObj]=React.useState({
        id:props.data.id,
        name:"",
        price:"",
        stock:"",
        image:""
    })
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
    const dispatch = useDispatch();
    const editItem = () =>{
        if(obj.name !== "" && obj.price !== "" && obj.stock !== "" && obj.image !== "") {
            if (status !== "valid") {
                console.log("hello");
                //obj.image = "https://image.shutterstock.com/image-vector/ui-image-placeholder-wireframes-apps-260nw-1037719204.jpg"
            }
            console.log(obj);
            dispatch(edit_item(obj))
        }
    }
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder={props.data.name} id="name" name={"name"} onChange={handleChange}/>
            <label htmlFor="price">Price: $</label>
            <input type="text" placeholder={props.data.price} id="price" name={"price"} onChange={handleChange}/>
            <label htmlFor="stock">Stock: </label>
            <input type="text" placeholder={props.data.stock} id="stock" name={"stock"} onChange={handleChange}/>
            <label htmlFor="name">Image: </label>
            <input type="text" placeholder={props.data.image} id="image" name={"image"} onChange={handleChange} />
            <button onClick={editItem}>Submit</button>
        </div>
    )
}
export default AdminPopUp;