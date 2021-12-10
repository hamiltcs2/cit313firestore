import React from "react";
import {NavLink} from "react-router-dom";
function Nav() {
    return(
        <nav>
            <NavLink exact to={"/"}>Home</NavLink>
            <NavLink exact to={"/cart"}>Cart</NavLink>
            <NavLink exact to={"/admin"}>Admin</NavLink>
        </nav>
    )
}
export default Nav;