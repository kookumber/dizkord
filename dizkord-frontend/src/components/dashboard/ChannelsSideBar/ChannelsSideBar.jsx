import React from "react";
import { styled } from "@mui/system";
import ChannelsList from "./ChannelsList/ChannelsList";
import ChannelsBarHeader from "./ChannelsBarHeader";

const MainContainer = styled('div')({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
    paddingLeft: '8px',
    paddingRight: '8px'
})

const ChannelsSideBar = () => {
    return (
        <MainContainer>
            <ChannelsBarHeader />
            <ChannelsList />
        </MainContainer>
    )
}

export default ChannelsSideBar