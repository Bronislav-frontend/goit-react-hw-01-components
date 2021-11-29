import PropTypes from 'prop-types';
import s from './FriendItem.module.css';

function FriendItem({ avatar, name, isOnline, id }) {
  return (
    <>
      <li className={s.item} key={id}>
        <span
          className={s.status}
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></span>
        <img src={avatar} alt="User avatar" width="48" />
        <p className={s.name}>{name}</p>
      </li>
    </>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendItem;
