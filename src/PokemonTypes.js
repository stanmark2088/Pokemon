import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PokemonTypes() {
    
    useEffect(() => {
        fetchItems()
    }, []);

    const [types, setTypes] = useState([]);
    
 
    
    const fetchItems = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/type`);
        
        const types = await data.json();
        setTypes(types.results);
    };
    
    
    
    
    return (
        <div>
            {types.map((types) => (
                <h3 style = {{textTransform : 'capitalize'}}>
                     {types.name}
                </h3>
            ))}
        </div>
    );
}


export default PokemonTypes;



