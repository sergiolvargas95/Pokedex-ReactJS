import React, { useState } from 'react';
import Card from '../components/Card';
import '../styles/App.scss';

const App = () => {
    const[ characters, setCharacters ] = useState(" ");
    const[pokemonChosen, setPokemonChosen] = useState(false);
    const[ pokemon, setPokemon ] = useState({
        name: "",
        species: "",
        image: "",
        hp: "",
        attack: "",
        defense:"",
    })

    return (
        <div className="Pokedex">
            <Card
                characters={characters}
                setCharacters={setCharacters}
                pokemonChosen={pokemonChosen}
                setPokemonChosen={setPokemonChosen}
                pokemon={pokemon}
                setPokemon={setPokemon}

            />
        </div>
    )
}

export default App;
