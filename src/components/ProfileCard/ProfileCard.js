import { Card, Stats, Description } from './ProfileCard.styled';

// import css from 'ProfileCard';
export default function ProfileCard({
  username,
  tag,
  location,
  avatar,
  likes,
  views,
  followers,
}) {
  return (
    <Card>
      <Description>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </Description>

      <Stats className="stats">
        <li>
          <span className="label">followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </Stats>
    </Card>
  );
}
