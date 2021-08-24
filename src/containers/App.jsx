import React from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import '../styles/App.scss';

const App = () => {
    return (
        <div className="Pokedex">
            <Search />
            <Card />
        </div>
    )
}

export default App;
