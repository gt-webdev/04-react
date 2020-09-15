import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" name="Home" component={Home} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
