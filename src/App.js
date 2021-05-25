import React from 'react';
import Home from './components/Home';
import Header from './components/Header'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListProduct from './components/ListProduct';


const App = () => {
    return (
        <Router>
            <div className="app bg-light contanier">
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/product'>
                        <ListProduct />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;