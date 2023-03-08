import ProfileCard from './ProfileCard/ProfileCard'
import userData from '../data/user.json'
import statsData from '../data/data.json'
// import statisticData from '../data/data.json'
import PropTypes from 'prop-types'
import Statistics from './Statistics/Statistics'

export const App = () => {
  console.log(statsData);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <div>

      <ProfileCard
        username={ userData.username}
        tag={ userData.tag}
        location={ userData.location}
        likes={ userData.stats.likes}
        followers={ userData.stats.followers}
        views={ userData.stats.views}
        />
      </div>
      <div>

      <Statistics data={statsData}>
        
      </Statistics>
      </div>
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
