import React, { useEffect } from "react";
import { styled } from "@mui/system";
import ChannelsList from "./ChannelsList/ChannelsList";
import ChannelsBarHeader from "./ChannelsBarHeader";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getActions } from "../../../store/actions/serverActions";


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

const ChannelsSideBar = ({ servers, currentServer, setCurrentServerDetails }) => {
    
    const { channelId } = useParams()
    
    useEffect(() => {
        const currentPath = window.location.pathname

        let currServer = {}
        servers.forEach((server) => {
            server.channels.forEach(channel => {
                if (channel._id === channelId) {
                    currServer = server
                }
            })
        })

        if (currentPath.includes("channels")) {
            setCurrentServerDetails(currServer)
        }
        
    }, [servers])
    return (
        <MainContainer>
            { currentServer ? (
            <ChannelsBarHeader serverName={currentServer.serverName}/>
            )  : null }
            { currentServer ? <ChannelsList channels={currentServer.channels} serverId={currentServer._id}/> : null }
        </MainContainer>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state.usersServers
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(ChannelsSideBar)