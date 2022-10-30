import React from "react";
import { styled } from "@mui/system";
import PendingInvititationsListItem from "./PendingInvititationsListItem";
import { connect } from "react-redux";


const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
})

// Mapping the state to props, we get the pendingFriendsInvite data when the action of SET_PENDING_FRIENDS_INVITE is executed
const PendingInvitations = ({ pendingFriendsInvites }) => {
    console.log("hi", pendingFriendsInvites)
    return (
        <MainContainer>
            {pendingFriendsInvites.map(invite => (
                <PendingInvititationsListItem 
                    key={invite._id}
                    id={invite._id}
                    username={invite.senderId.username}
                    email={invite.senderId.email}
                />
            ))}
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ friends }) => {
    return {
        ...friends,
    }
}

export default connect(mapStoreStateToProps)(PendingInvitations)