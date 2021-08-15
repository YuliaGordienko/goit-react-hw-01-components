import PropTypes from 'prop-types';
import s from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.item}>
          <span className={friend.isOnline ? s.green : s.red}></span>
          <img className={s.avatar} src={friend.avatar} alt={friend.name} width='48' />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};
