import React from "react";
import { NavLink ,Link} from "react-router-dom";
const Menu=()=>{
    return (
        <>
       <Link to="/About">About Us</Link><br />
       
        <NavLink to="/Contact">Contact</NavLink>
        {/* <a href="/About">AboutUs</a>
        <a href="/contact">Contact</a> */}
        
        </>
    );
    
};
export default Menu;