import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar/Sidebar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";
import { logout } from "../../utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";
import { getActions as serverActions } from "../../store/actions/serverActions";
import { connectWithSocketServer } from "../../realtimeCommunication/socketConnection";
import FriendsAppBar from "./AppBar/FriendsAppBar";
import ChatRoom from "./ChatRoom/ChatRoom";


const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
})

const Dashboard = ({ setUserDetails, SubsideBar, isUserInRoom }) => {
    
    const pathname = window.location.pathname

    let appBarToDisplay = null

    if (pathname.indexOf('conversations') > -1) {
        appBarToDisplay = <FriendsAppBar />
    } else {
        appBarToDisplay = <AppBar />
    }

    useEffect(() => {
        const userDetails = localStorage.getItem('user')
        

        if (!userDetails) {
            logout()
            
        } else {
            setUserDetails(JSON.parse(userDetails))
            // if there is a user, only then can we connect with the socket server
            // using the function we created in our socketConnection file
            connectWithSocketServer(JSON.parse(userDetails))
        }
    }, []) 

    return (
        <Wrapper>
            <Sidebar />
            <SubsideBar />
            <Messenger />
            {appBarToDisplay}
            {isUserInRoom && <ChatRoom />}
        </Wrapper>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state.usersServers,
        ...state.chatRoom
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
        ...serverActions(dispatch)
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard)