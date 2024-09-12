import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
    const [num, setNum] = useState();  
    const [name, setName] = useState();  
    const [move, setMove] = useState();  

    useEffect(() => {
        async function getdata() {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
                console.log(res.data.name); 
                setName(res.data.name);
                setMove(res.data.move);
            } catch (error) {
                console.error(error);
            }
        }
        getdata();
    }, [num]);  

    return (
        <>
            <h1>Hi, you chose <span style={{color:'red'}}> {num} value</span></h1>
            <h1>Hi,  my name is<span style={{color:'red'}}> {name} </span></h1>
            <h1>Hi, i have <span style={{color:'red'}}>  {move}moves</span></h1>
            <select value={num} onChange={(event) => setNum(event.target.value)}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </>
    );
};

export default ComA;
