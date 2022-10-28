import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";

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

const FriendsList = () => {
    return (
        <MainContainer>
            {
                DUMMY_FRIENDS.map(friend => (
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

export default FriendsList