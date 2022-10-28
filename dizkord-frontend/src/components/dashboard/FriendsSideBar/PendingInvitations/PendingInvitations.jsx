import React from "react";
import { styled } from "@mui/system";
import PendingInvititationsListItem from "./PendingInvititationsListItem";

const DUMMY_INVITES = [
    {
        _id: 4,
        senderId: {
            username: 'Bruv',
            email: 'Bruv@gmail.com'
        }
    },
    {
        _id: 5,
        senderId: {
            username: 'Bruv2',
            email: 'Bruv2@gmail.com'
        }
    },
    {
        _id: 6,
        senderId: {
            username: 'Thing1',
            email: 'Thing1@gmail.com'
        }
    }
]

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%',
    height: '22%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'auto'
})

const PendingInvitations = () => {
    return (
        <MainContainer>
            {DUMMY_INVITES.map(invite => (
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

export default PendingInvitations