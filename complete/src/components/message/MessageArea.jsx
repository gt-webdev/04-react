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
