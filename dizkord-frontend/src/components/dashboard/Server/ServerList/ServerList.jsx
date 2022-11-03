import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import ServerListItem from "./ServerListItems";

const DUMMY_SERVERS = [
    {
        id: 1,
        serverName: 'Awesome Sever',
        channels: [
            'general',
            'cool'
        ],
        owner: 'MrAwesome'
    },
    {
        id: 2,
        serverName: 'One Piece',
        channels: [
            'general',
            'Water 7'
        ],
        owner: 'Luffy'
    },
    {
        id: 3,
        serverName: 'Magic',
        channels: [
            'general',
            'Gathering'
        ],
        owner: 'Merlin'
    }
]

const MainContainer = styled('div')({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const ServerList = ({ servers }) => {
    // console.log("servers?", servers)
    return (
        <MainContainer className="servers-container">
            {
                servers.map((server) => {
                    return (
                        <ServerListItem 
                            key={server._id}
                            id={server._id}
                            serverName={server.serverName}
                            owner={server.owner}
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