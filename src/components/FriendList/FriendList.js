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
                        id={friend.id}
                    />
                )}
            </ul>
        </>
    );
}

FriendList.propTypes = {
    friend: {
        avatar: propTypes.string,
        name: propTypes.string.isRequired,
        isOnline: propTypes.bool.isRequired,
        id:propTypes.number.isRequired,
    }
}

export default FriendList;