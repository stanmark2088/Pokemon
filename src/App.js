import React from 'react';
import './App.css';
import './Navbar';
import Navbar from './Navbar';
import PokemonList from './PokemonList';
import PokemonTypes from './PokemonTypes';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import PokemonDetails from './PokemonDetails';


function App() {
    return (
    <Router>
        <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/pokemons" component={PokemonList}/>
                    <Route path="/types" component={PokemonTypes} />
                    <Route path="/pokemon/:id" component={PokemonDetails}/>
                    
                </Switch>
        </div>
    </Router>
  );
}



export default App;
