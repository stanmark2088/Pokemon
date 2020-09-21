import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

 function Navbar() {
    return (
        <nav>
            <h3>Pokedex</h3>
            <ul className = "nav-links">
                <Link style = {navStyle} to='/pokemons'>
                    <li>Pokemon</li>
                </Link>
                <Link style = {navStyle} to='/types'>
                    <li>Types</li>
                </Link>
            </ul>
        </nav>
    )
 }

const navStyle = {
     color : 'white'
 }

export default Navbar;