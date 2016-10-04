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
