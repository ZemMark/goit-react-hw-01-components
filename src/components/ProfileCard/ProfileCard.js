import { Card, Stats, Description, UserName } from './ProfileCard.styled';

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
        />
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <li>
          <span>followers</span>
          <span>{followers}</span>
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
