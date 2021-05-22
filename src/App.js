import React from 'react';
import Home from './components/Home';
import Header from './components/Header'

const App = () => {
    return (
        <div className="app bg-light">
            <Header />
            <Home />
        </div>
    )
}

export default App;