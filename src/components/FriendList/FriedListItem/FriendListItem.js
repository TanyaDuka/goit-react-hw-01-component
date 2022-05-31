import React from 'react';
import propTypes from 'prop-types';
import s from './FriendListItem.module.css';
//import defaultAvatar from './defaultAvatar.jpg';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.Item}>
      <span
        className={s.Status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      />
      <img className={s.Avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.Name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  isOnline: propTypes.bool.isRequired,
};

export default FriendListItem;
