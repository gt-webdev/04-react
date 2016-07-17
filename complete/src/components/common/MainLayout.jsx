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
