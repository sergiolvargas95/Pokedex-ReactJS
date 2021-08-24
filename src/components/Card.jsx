import React from 'react'

const Card = () => {
    return (
        <div className="Card">
            <h1>Blastoise</h1>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" alt="pokemon name"/>
            <p className="Card__Id">N° 9</p>
            <div>
                <p>Water</p>
            </div>
            <div className="Card__Stats">
                <div className="Card__Stats--description">
                    <p>hp</p>
                    <p>79</p>
                </div>
                <div className="Card__Stats--description">
                    <p>attack</p>
                    <p>83</p>
                </div>
                <div className="Card__Stats--description">
                    <p>defense</p>
                    <p>100</p>
                </div>
                <div className="Card__Stats--description">
                    <p>special-attack</p>
                    <p>85</p>
                </div>
                <div className="Card__Stats--description">
                    <p>special-defense</p>
                    <p>105</p>
                </div>
                <div className="Card__Stats--description">
                    <p>speed</p>
                    <p>78</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
