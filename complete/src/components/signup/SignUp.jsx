import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

const Home = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div className="signup-form">
    		<h2>Sign Up</h2>
    		<form method="GET" action="message.html">
    			<label htmlFor="username">Username:</label>
    			<input type="text" id="username" />
    			<label htmlFor="password1">Password:</label>
    			<input type="password" id="password1" />
    			<label htmlFor="password2">Confirm Password:</label>
    			<input type="password" id="password2" />
    			<input type="submit" className="button" />
    		</form>
    	</div>
    );
  }
});

export default Home;
