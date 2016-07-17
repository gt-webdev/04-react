import React from 'react';
import { Router, Route, browserHistory } from 'react-router'

import MainLayout from './components/common/MainLayout.jsx'
import Home from './components/home/Home.jsx';
import SignUp from './components/signup/SignUp.jsx';
import Message from './components/message/Message.jsx';

const AppRouter = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route component={ MainLayout }>
          <Route path="/" component={ Home } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/message" component={ Message } />
        </Route>
      </Router>
    );
  }
});

export default AppRouter;
