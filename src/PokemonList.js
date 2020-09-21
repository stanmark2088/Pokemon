import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PokemonList() {
    
    useEffect(() => {
        fetchItems()
    }, []);

    const [pokemons, setPokemons] = useState([]);
    
 
    
    const fetchItems = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon`);
        
        const pokemons = await data.json();
        setPokemons(pokemons.results);
    };
    
    
    
    
    return (
        <div>
            {pokemons.map((pokemon,counter) => (
                <h3 key={counter+1}>
                    <Link style={{textDecoration: 'none', textTransform : "capitalize" }} to ={`/pokemon/${counter+1}`} key={counter+1} >{pokemon.name}</Link>
                </h3>
            ))}
        </div>
    );
}




export default PokemonList;



