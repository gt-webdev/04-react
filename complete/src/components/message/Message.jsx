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
