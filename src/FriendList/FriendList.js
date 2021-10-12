import FriendListItem from "./FriendListItem";

export default function FriendList({ friendsJson }) {
  return (
    <ul className="friend-list">
          {friendsJson.map((friend) => (
          <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
        />
      )
      )}
        
    </ul>
  );
}
