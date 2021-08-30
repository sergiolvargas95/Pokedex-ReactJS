import React, { useState } from 'react';

const Card = () => {
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
        <div className="Card">
            <div>
                <input type="text" onChange={(event)=>{setCharacters(event.target.value)}} placeholder="type your pokemon"/>
                <button onClick={searchPokemon}>Search Pokemon</button>
            </div>
            <div className="DisplaySection">
                {!pokemonChosen ?(
                    <h1>Please choose a pokemon</h1>
                ) :(
                    <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt="pokemon image" />
                    <h3>Type: {pokemon.type} </h3>
                    <h3>hp: {pokemon.hp} </h3>
                    <h3>attack: {pokemon.attack} </h3>
                    <h3>defense: {pokemon.defense} </h3>
                    </>
                )}
            </div>
        </div>
    )
}

export default Card;
