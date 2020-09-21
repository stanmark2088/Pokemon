import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function PokemonDetails() {
    
    useEffect(() => {
        fetchItems()
    }, []);

    const [pokemonDetails, setPokemonsDetails] = useState({ sprites: {} });
    
 
    
    const fetchItems = async () => {
        const allUrl = window.location.href;
        const id = allUrl.split('/').reverse()[0];
       
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        
        const pokemonDetails = await data.json();
        console.log(pokemonDetails);
        setPokemonsDetails(pokemonDetails);
    };
    
    
    
    
    return (
        <div>
            <h1>{pokemonDetails.name}</h1> 
            <img style={imageSize} src={pokemonDetails.sprites.front_default} alt="" />
            <img style={imageSize} src={pokemonDetails.sprites.back_default} alt="" />
        
        </div>
    );
}

const imageSize = {
    height: '300px',
    width: '300px',
}


export default PokemonDetails;
