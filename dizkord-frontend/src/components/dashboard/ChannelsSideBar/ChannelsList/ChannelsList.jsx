import React from "react";
import { styled } from "@mui/system";
import ChannelsListItem from "./ChannelsListItem";
import { Typography } from "@mui/material";
import AddChannelButton from "../AddChannelButton";

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

const TextChannelsHeader = styled('div')({
    width: '100%',
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    verticalAlign: 'middle',
})

const ChannelsList = ({ channels, serverId }) => {
    return (
        <>
            
            <TextChannelsHeader
                className="text-channel-header"
            >
                <Typography
                    sx={{
                        color: '#8e9297',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        marginLeft: '3px',
                    }}
                >
                    TEXT CHANNELS
                </Typography>
                <AddChannelButton />
            </TextChannelsHeader>
            <MainContainer>
                {   channels ? 
                    channels.map((channel) => (
                        <ChannelsListItem 
                            key={channel._id} 
                            id={channel._id}
                            channelName={channel.channelName}
                            serverId={serverId}
                        />
                    )) : null
                }
            </MainContainer>
        </>
    )
}

export default ChannelsList