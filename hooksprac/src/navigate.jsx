import React from "react";
import {Link, Outlet,link} from "react-router-dom";
function Navigate(){
    return(
        <>
        <ul style={{listStyle:"none"}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about "exact activeStyle={{color:'red'}}>About</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <Outlet/>
        </>
    )
}

export default Navigate;