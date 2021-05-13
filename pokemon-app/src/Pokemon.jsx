import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = ({ url }) => {
    const [poke, setPoke] = useState("");

    useEffect(() => {
        const getPokemon = async () => {
            const data = await axios(url);
            setPoke(data.data);
        };
        getPokemon();
    }, []);
    
    if (!poke) return null;

    return (
        <div>
            <div>
                <p>
                    <strong>{poke.name}</strong>
                </p>
                <div>
                    <img src={poke.sprites.front_default} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Pokemon;
