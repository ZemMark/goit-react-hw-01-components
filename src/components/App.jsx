import ProfileCard from './ProfileCard/ProfileCard'
import userData from '../data/user.json'
import statsData from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
// import statisticData from '../data/data.json'
import PropTypes from 'prop-types'
import Statistics from './Statistics/Statistics'
import FriendList from './FriendsList/FriendsList'
import Table from './TransactionsTable/Table'

export const App = () => {
  return (
    <div
      style={{
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
      <div style={{textAlign: 'center'}}>

      <Statistics data={statsData}>
        
        </Statistics>
        
      </div>
      <div>
        <FriendList friends={friends}></FriendList>
      </div>
      <div style={{
    width: '100%',
    margin: '50px 0',
}}>
        <Table data={transactions} ></Table>
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
