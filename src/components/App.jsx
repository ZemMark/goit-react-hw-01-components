import ProfileCard from './ProfileCard/ProfileCard'
import userData from '../data/user.json'
import PropTypes from 'prop-types'
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ProfileCard
        username={ userData.username}
        tag={ userData.tag}
        location={ userData.location}
        likes={ userData.stats.likes}
        followers={ userData.stats.followers}
        views={ userData.stats.views}
      />
    </div>
  );
  // 
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
}
