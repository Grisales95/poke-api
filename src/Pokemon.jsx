import React, { useState, useEffect } from "react";
import "./App.css"
import axios from "axios";

const Pokemon = ({ url }) => {
    const [poke, setPoke] = useState("");

    useEffect(() => {
        const getPokemon = async () => {
            const data = await axios(url);
            setPoke(data.data);
        };
        getPokemon();
    }, [url]);

    if (!poke) return null;

    return (
        <div className="card mx-2 my-2" >
            <div className="card-body">
            <h5 className="color-title"> {poke.name}</h5>
            <img src={poke.sprites.front_default} alt="" width="120px" />
             <p className="color-p">
                 {poke.types.map(item => <div className="d-flex justify-content-center">{item.type.name}</div>)}
            </p>
            </div>
            
        </div>
    );
};

export default Pokemon;
