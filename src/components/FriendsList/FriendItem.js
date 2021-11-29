import PropTypes from 'prop-types';

function FriendItem({ avatar, name, isOnline, id }) {
  return (
    <>
      <li className="item" key={id}>
        <span
          className="status"
          style={{ backgroundColor: isOnline ? 'green' : 'red' }}
        ></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
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
