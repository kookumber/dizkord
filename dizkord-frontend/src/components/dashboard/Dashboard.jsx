import React from "react";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar/Sidebar";
import FriendsSideBar from "./FriendsSideBar/FriendsSideBar";
import Messenger from "./Messenger/Messenger";
import AppBar from "./AppBar/AppBar";

const Wrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
})

const Dashboard = () => {
    return (
        <Wrapper>
            <Sidebar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
        </Wrapper>
    )
}

export default Dashboard