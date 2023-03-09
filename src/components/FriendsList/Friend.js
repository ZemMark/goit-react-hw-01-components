import PropTypes from 'prop-types';
import { Indicator } from './FriendsList.styled';
export function Friend({ avatar, name, isOnline }) {
  console.log(isOnline);
  return (
    <>
      <img src={avatar} alt="User avatar" width="48" />
      <Indicator isOnline={isOnline}></Indicator>
      <p>{name}</p>
    </>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isOnline: PropTypes.bool,
};
export default Friend;
