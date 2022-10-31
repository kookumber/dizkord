import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

const DUMMY_FRIENDS = [
    {
        id: 1,
        username: 'banana',
        isOnline: true
    },
    {
        id: 2,
        username: 'monkey',
        isOnline: true
    },
    {
        id: 3,
        username: 'coolguy',
        isOnline: false
    }
];

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
    height: '50%'
})

const FriendsList = ({ friends }) => {
    return (
        <MainContainer>
            {
                friends.map(friend => (
                    <FriendsListItem 
                        key={friend.id}
                        id={friend.id} 
                        username={friend.username}
                        isOnline={friend.isOnline}/>
                ))
            }
        </MainContainer>
    )
}

// Basically pulling friends from the store, which has the combine reducers which will return global state
const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    }
}

export default connect(mapStoreStateToProps)(FriendsList)