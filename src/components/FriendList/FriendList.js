import React from "react";
import propTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
    return (
        <>
            <ul className={s.FriendList}>
                {friends.map((friend) =>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        key={friend.id}
                    />
                )}
            </ul>
        </>
    );
}

FriendList.propTypes = {
    friends: propTypes.arrayOf(
      propTypes.exact({
        avatar: propTypes.string.isRequired,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool,
        id: propTypes.number.isRequired
      })
    ).isRequired,
}

export default FriendList;