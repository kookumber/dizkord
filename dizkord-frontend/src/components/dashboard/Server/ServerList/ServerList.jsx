import React from "react";
import { styled } from "@mui/system";
// import { connect } from "react-redux";
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

const ServerList = () => {
    return (
        <MainContainer className="servers-container">
            {
                DUMMY_SERVERS.map((server) => {
                    return (
                        <ServerListItem 
                            key={server.id}
                            id={server.id}
                            serverName={server.serverName}
                            owner={server.owner}
                        />
                    )
                })
            }
        </MainContainer>
    )
}

export default ServerList