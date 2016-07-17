import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import hackData from 'json!./hackData.json'
import FriendList from './FriendList.jsx';
import MessageArea from './MessageArea.jsx'

const Message = React.createClass({
  mixins: [ PureRenderMixin ],
  render() {
    return (
      <div className="message-content">
    		<FriendList friends={ Object.keys(hackData).map((key) => {
          let data = hackData[key];
          data.id = key;
          return data; 
        })}/>
        <MessageArea messageList={ hackData.josh.messages } />
    	</div>
    );
  }
});

export default Message;
