import React from 'react';
import Search from './Search';
import '../styles/components/Card.scss'

const Card = ({ characters, setCharacters, pokemonChosen, setPokemonChosen, pokemon, setPokemon}) => {
    return (
        <div className="Card">
            <Search
                characters={characters}
                setCharacters={setCharacters}
                setPokemonChosen={setPokemonChosen}
                pokemon={pokemon}
                setPokemon={setPokemon}
            />
            <div className="DisplaySection">
                {!pokemonChosen ?(
                    <h1>Please choose a pokemon</h1>
                ) :(
                    <>
                    <div className="PokemonName">
                        <h1>{pokemon.name}</h1>
                    </div>
                    <img src={pokemon.image} alt="pokemon image" />
                    <h3><span>Type:</span> {pokemon.type} </h3>
                    <h3><span>hp:</span> {pokemon.hp} </h3>
                    <h3><span>attack:</span> {pokemon.attack} </h3>
                    <h3><span>defense:</span> {pokemon.defense} </h3>
                    </>
                )}
            </div>
        </div>
    )
}

export default Card;
