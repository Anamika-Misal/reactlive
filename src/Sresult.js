import React from "react";

const Sresult=(props)=>{
    const img=`https://source.unsplash.com/random/1920x1080/?${props.name}`;
    return(
        <>
        
        <div>
            <img src={img} alt="search" />
        </div>
        
        </>
    )
}
export default Sresult;