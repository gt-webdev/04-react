import React from 'react';


class FriendList extends React.Component {
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
}

export default FriendList;
