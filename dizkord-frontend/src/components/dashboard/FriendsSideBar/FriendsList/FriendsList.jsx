import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
    height: '50%'
})

// Function to find if our friends are part of list of online users
const checkFriendStatus = (friends = [], onlineUsers = []) => {
    friends.forEach(friend => {
        const isUserOnline = onlineUsers.find(user => user.userId === friend.id)
        // If we find friend on onlineUsers list, we'll set isOnline status to true
        friend.isOnline = isUserOnline ? true : false
    })
    return friends
}

const FriendsList = ({ friends, onlineUsers }) => {
    
    return (
        <MainContainer>
            {
                checkFriendStatus(friends, onlineUsers).map(friend => (
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