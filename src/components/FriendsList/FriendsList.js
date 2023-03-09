import Friend from './Friend';
import { Friends } from './FriendsList.styled';
export function FriendLIst({ friends }) {
  return (
    <Friends>
      {friends.map(({ avatar, id, isOnline, name }) => (
        <li key={id}>
          <Friend avatar={avatar} id={id} isOnline={isOnline} name={name} />
        </li>
      ))}
    </Friends>
  );
}
export default FriendLIst;
