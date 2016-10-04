# The React TUTORIAL!!!!!
Let's learn how to use React!

## 01) Set Up Routing
src/client.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router.jsx';

// Put all the things you want to run as soon as the client loads here.

ReactDOM.render(<Router />, document.getElementById('app'));
```

src/Router.jsx
```
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
```

src/components/common/MainLayout.jsx
```
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const MainLayout = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div>
        <header>
      		<h1>My Message</h1>
      	</header>
        {this.props.children}
      </div>
    );
  }
});

export default MainLayout;
```

src/components/home/Home.jsx
```
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

const Home = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div className="home-container">
    		<div className="home-text-container">
    			<h1>Welcome to My Message!</h1>
    			<p>Here you can message anyone who's signed up!</p>
    			<Link to="/signup" className="button">Sign Up</Link>
    		</div>
    		<div className="home-background-shader" />
    	</div>
    );
  }
});

export default Home;
```

src/components/signup/SignUp.jsx
```
import React from 'react';
import { browserHistory } from 'react-router';

const Home = React.createClass({
  render() {
    return (
      <div className="signup-form">
    		<h2>Sign Up</h2>
    	</div>
    );
  }
});

export default Home;
```

src/components/message/Message.jsx
```
import React from 'react';

import hackData from 'json!./hackData.json'
import FriendList from './FriendList.jsx';
import MessageArea from './MessageArea.jsx'

const Message = React.createClass({
  render() {
    return (
      <div className="message-content">

    	</div>
    );
  }
});

export default Message;
```

## 02: Make an interactive sign-up page
src/componets/signup/signup.jsx
```
import React from 'react';
import { browserHistory } from 'react-router';

const Home = React.createClass({
  getInitialState: function() {
    return {
      username: "",
      password1: "",
      password2: "",
      passwordsMatch: true
    }
  },
  updateField: function(fieldName, event) {
    let newState = {};
    newState[fieldName] = event.target.value;
    this.setState(newState, () => {
      this.setState({
        passwordMatch: this.state.password1 === this.state.password2
      });
    });
  },
  submit: function(event) {
    event.preventDefault();
    if (!this.state.username || !this.state.password1 || !this.state.password2) {
      alert("Please fill out all fields.");
    }
    else if (!this.state.passwordMatch) {
      alert("The provided passwords do not match.");
    } else {
      browserHistory.push('/message');
    }
  },
  render() {
    return (
      <div className="signup-form">
    		<h2>Sign Up</h2>
    		<form onSubmit={this.submit}>
    			<label htmlFor="username">Username:</label>
    			<input type="text" id="username" value={this.state.username}
              onChange = {this.updateField.bind(null, 'username')} />
    			<label htmlFor="password1">Password:</label>
    			<input type="password" id="password1" value={this.state.password1}
              onChange = {this.updateField.bind(null, 'password1')} />
    			<label htmlFor="password2">Confirm Password:</label>
    			<input type="password" id="password2" value={this.state.password2}
              onChange = {this.updateField.bind(null, 'password2')} />
    			<input type="submit" className="button" />
    		</form>
    	</div>
    );
  }
});

export default Home;
```

## 03: Message Page
src/components/message/Message.jsx
```
import React from 'react';

import hackData from 'json!./hackData.json'
import FriendList from './FriendList.jsx';
import MessageArea from './MessageArea.jsx'

const Message = React.createClass({
  getInitialState: function() {
    return {
      data: hackData,
      currentSelected: Object.keys(hackData)[0],
    }
  },
  onNewMessage: function(message) {
    let curFriend = this.state.data[this.state.currentSelected];
    curFriend.messages.push({
      sender: 'me',
      text: message
    });
    let newData = this.state.data;
    newData[this.state.currentSelected] = curFriend
    this.setState({
      data: newData
    });
  },
  onNewFriend: function(friendName) {
    this.setState({
      currentSelected: friendName
    })
  },
  render() {
    return (
      <div className="message-content">
    		<FriendList onNewFriend = {this.onNewFriend}
            curUser = {this.state.currentSelected}
            friends={ Object.keys(hackData).map((key) => {
              let data = hackData[key];
              data.id = key;
              return data;
            })}/>
          <MessageArea messageList={this.state.data[this.state.currentSelected].messages}
          onNewMessage={this.onNewMessage} />
    	</div>
    );
  }
});

export default Message;
```

src/components/message/MessageArea.jsx
```
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const MessageArea = React.createClass({
  submitMessage: function(event) {
    event.preventDefault();
    this.props.onNewMessage(this.refs.typingArea.value);
    this.refs.typingArea.value = '';
  },
  render() {
    return (
      <div className="message-pane">
        <ul className="messages">
          {this.props.messageList.map((message, index) => {
            if (message.sender === 'me') {
              return (<li key={index} className="message first-person-message">{message.text}</li>)
            } else {
              return (<li key={index} className="message second-person-message">{message.text}</li>)
            }
          })}
  			</ul>
  			<form className="typing-area" onSubmit={this.submitMessage}>
  				<input type="text" placeholder="Type your message here." ref="typingArea"/>
  				<input type="submit" className="button" value="Send" />
  			</form>
      </div>
    );
  }
});

export default MessageArea;
```

src/components/message/FriendList.jsx
```
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


const FriendList = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <ul className="user-pane">
        {this.props.friends.map((friend) => {
          return (
            <li className={(this.props.curUser === friend.id) ? 'selected' : ''}
                key={friend.id} onClick={this.props.onNewFriend.bind(null, friend.id)}>
              <img className="profile-image" src={friend.profileImage} />{friend.displayName}
            </li>
          );
        })}
  		</ul>
    );
  }
});

export default FriendList;
```
