import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import ServerListItem from "./ServerListItems";

const MainContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const ServerList = ({ servers }) => {
    
    return (
        <MainContainer className="servers-container">
            {
                servers.map((server) => {
                    return (
                        <ServerListItem 
                            key={server._id}
                            serverId={server._id}
                            serverName={server.serverName}
                            owner={server.owner}
                            serversChannels={server.channels}
                        />
                    )
                })
            }
        </MainContainer>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state.usersServers,
    }
}

export default connect(mapStoreStateToProps)(ServerList)