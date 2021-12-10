import React from "react";
import {useSelector} from "react-redux";
// import {useDispatch} from "react-redux";
import Box from "./Box";
function Home(){
    // const [obj, setObj]=React.useState({
    //     name:"",
    //     price:"",
    //     stock:"",
    //     image:""
    // })
    const products = useSelector(state => state.products);
    let prodEles = products.map((prod, idx)=>
        <Box key ={idx} data={prod}/>
    )
    // const dispatch = useDispatch();
    // const handleChange = (event)=>{
    //     const newInput={
    //         ...obj,
    //         [event.target.name]: event.target.value
    //     }
    //     setObj(newInput);
    // }
    // const username = useSelector(state => state.currUser);
    // const tags = useSelector(state=> state.tags);
    //
    // const tagEles = tags.map((tg, idx)=>
    // <div>
    //     <h1>tg.name</h1>
    //     <h3>tg.age</h3>
    // </div>
    // )

    return(
        <div>
            <div>Home</div>
            <div>
                {prodEles}
            </div>
        </div>
    )
}
export default Home;