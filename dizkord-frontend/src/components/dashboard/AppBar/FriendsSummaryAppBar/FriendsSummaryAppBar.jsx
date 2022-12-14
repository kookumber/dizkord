import React from "react";
import { styled } from "@mui/system";
import ChosenOptionLabel from "../ChosenOptionLabel";
import AddFriendButton from "../../FriendsSideBar/AddFriendButton";
import OnlineFriendsButton from "./OnlineFriendsButton";
import OfflineFriendsButton from "./OfflineFriendsButton";
import PendingInvitesButton from "./PendingFriendsButton";

const MainContainer = styled('div')({
    position: "absolute",
    right: '0',
    top: '0',
    height: '48px',
    width: 'calc(100% - 350px)',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#36393f",
    borderBottom: '1px solid #1e2124',
    padding: '0 15px'
})

const FriendsSummaryAppBar = () => {

    return (
        <MainContainer>
            <OnlineFriendsButton />
            <OfflineFriendsButton />
            <PendingInvitesButton />
            <AddFriendButton />
        </MainContainer>
    )
}

export default FriendsSummaryAppBar