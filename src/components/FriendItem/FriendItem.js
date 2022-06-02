import PropTypes from 'prop-types';
import styles from '../FriendItem/FriendItem.module.css';

const FriendItem = ({avatar, name, isOnline}) => 
{
    const statusClass = isOnline ? styles.green : styles.red;
    return (
    <div className={styles.friendItem}>
  <span className={statusClass}>{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</div>
)}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem