import React from 'react';
import '../styles/components/Search.scss'

const search = ({ characters, setCharacters, setPokemonChosen, setPokemon }) => {
    const searchPokemon = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${characters}`)
            .then(response => response.json())
            .then((data) =>
                setPokemon({
                    name: characters,
                    species: data.species.name,
                    image: data.sprites.other.dream_world.front_default,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defense: data.stats[2].base_stat,
                    type: data.types[0].type.name,
                })
            )
            setPokemonChosen(true)
    }
    return (
        <div className="SearchBar">
            <input type="text" onChange={(event)=>{setCharacters(event.target.value.toLocaleLowerCase())}} placeholder="type your pokemon"/>
            <button onClick={searchPokemon}>Search Pokemon</button>
        </div>
    )
}

export default search;