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
