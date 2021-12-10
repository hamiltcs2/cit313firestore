import React, {useState} from "react";
import AdminPopUp from "./AdminPopUp";
function AdminBox(props) {
    const [isOpen, setIsOpen] = useState(false);
    const edit = () =>{
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <div className ="product">
                <div>{props.data.name}</div>
                <div>{props.data.price}</div>
                <div>{props.data.stock}</div>
                <img src={props.data.image} alt={props.data.name}/>
                <button onClick={edit}>Edit</button>
            </div>
            {isOpen &&<div className ="popUp">
                <AdminPopUp data={props.data}></AdminPopUp>
                <button onClick={edit}>Close</button>
            </div>}
        </div>
    )
}
export default AdminBox;