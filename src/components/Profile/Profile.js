import React from "react";
import propTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
  return (
    <>
      <div className={s.Profile}>
        <div className={s.Description}>
          <img
            src={avatar}
            alt={username}
            className={s.Avatar}
          />
          <p className={s.Name}>{username}</p>
          <p className={s.Tag}>@{tag}</p>
          <p className={s.Location}>{location}</p>
        </div>

        <ul className={s.Stats}>
          <li>
            <span className={s.Label}>Followers</span>
            <span className={s.Quantity}>{followers}</span>
          </li>
          <li>
            <span className={s.Label}>Views</span>
            <span className={s.Quantity}>{views}</span>
          </li>
          <li>
            <span className={s.Label}>Likes</span>
            <span className={s.Quantity}>{likes}</span>
          </li>
        </ul>
      </div>

    </>
  );
}

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: {
    followers: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
    likes: propTypes.number.isRequired
  }
};

export default Profile;