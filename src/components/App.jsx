import ProfileCard from './ProfileCard/ProfileCard';
import { ProfileContainer } from './ProfileCard/ProfileCard.styled';
import { StatsContainer } from './Statistics/Statistics.styled';
import { TabletContainer } from './TransactionsTable/Table.styled';
import userData from '../data/user.json';
import statsData from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendsList/FriendsList';
import Table from './TransactionsTable/Table';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ProfileContainer>
        <ProfileCard
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          likes={userData.stats.likes}
          followers={userData.stats.followers}
          views={userData.stats.views}
        />
      </ProfileContainer>
      <StatsContainer>
        <Statistics data={statsData} title={'Upload stats'}></Statistics>
      </StatsContainer>
      <div>
        <FriendList friends={friends}></FriendList>
      </div>
      <TabletContainer>
        <Table data={transactions}></Table>
      </TabletContainer>
    </div>
  );
};

ProfileCard.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};
