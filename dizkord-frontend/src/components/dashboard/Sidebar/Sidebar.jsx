import React from "react";
import { styled } from "@mui/system";
import FriendsButton from "./FriendsButton";
import AddServerButton from "../Server/AddServerButton";
import './sidebar.scss'
import ServerList from "../Server/ServerList/ServerList";
import JoinServerButton from "../Server/JoinServerButton";
import { connect } from "react-redux";
import ActiveRoomButton from "./ActiveRoomButton";

const MainContainer = styled('div')({
    width: "80px",
    height: "100%",
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'flex-start',
    alignItems: "center",
    backgroundColor: "#202225",
    overflow: 'scroll',
      
})

const ChatRoomButtonsContainers = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '200px',
    overflowY: 'scroll'
})

const Separator = styled('div')({
    width: '50%',
    backgroundColor: '#4F545C7A',
    height: '3px',
    position: 'relative',
    marginTop: '10px'
})

const Sidebar = ({ activeRooms, isUserInRoom }) => {
    return (
        <MainContainer className="side-bar-container">
            <FriendsButton />
            {activeRooms.map((room) => (
                <ActiveRoomButton 
                    key={room.roomId}
                    roomId={room.roomId}
                    creatorUsername={room.creatorUsername}
                    numberOfParticipants={room.participants.length}
                    isUserInRoom={isUserInRoom}
                />
            ))}
                {/* <Separator /> */}
            <ServerList />
            <AddServerButton />
            <JoinServerButton />
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chatRoom }) => {
    return {
        ...chatRoom
    }
}

export default connect(mapStoreStateToProps)(Sidebar)