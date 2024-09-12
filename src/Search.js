import React, { useState } from "react";
import Sresult from "./Sresult";
const Search=()=>{
    const[img,setImg]=useState("")
    const InputEvent=(event)=>{
        const data =event.target.value;
        console.log(data)
        setImg(data)

    }
    return (
        <>
        <div className="searchbar">
        <input type="text" placeholder="search Anything" value={img} onChange={InputEvent}/>
        <Sresult name={img}/>
        </div>
        </>

    );
};
export default Search;