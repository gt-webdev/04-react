import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import MainLayout from "./components/common/MainLayout";
import Home from './components/home/Home.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Message from './components/message/Message.jsx';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
        <MainLayout />
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/signup" component={ SignUp } />
                <Route path="/message" component={ Message } />
            </Switch>
        </BrowserRouter>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
