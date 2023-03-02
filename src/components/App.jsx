import ProfileCard from './ProfileCard/ProfileCard'
import userData from '../data/user.json'
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
        label={ userData.label}
        likes={ userData.stats.likes}
        followers={ userData.stats.followers}
        views={ userData.stats.views}
      />
    </div>
  );
  // 
};
