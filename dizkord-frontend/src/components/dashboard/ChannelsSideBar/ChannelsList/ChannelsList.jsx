import React from "react";
import { styled } from "@mui/system";
import ChannelsListItem from "./ChannelsListItem";
import { Typography } from "@mui/material";

const DUMMY_CHANNELS = [
    {   
        id: 1,
        channelName: 'general',
        messages: ['Hi', 'Whassup']
    },
    {
        id: 2,
        channelName: 'Roundtable',
        messages: ['Hi', 'Whassup']
    },
    {
        id: 3,
        channelName: 'awesomechannel',
        messages: ['Hi', 'Whassup']
    }
]

const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})

const TextChannelsHeader = styled('div')({
    width: '100%',
    marginTop: '5px'
})

const ChannelsList = () => {
    return (
        <>
            <TextChannelsHeader>
                <Typography
                    sx={{
                        color: '#8e9297',
                        fontWeight: 'bold',
                        fontSize: '12px',
                        marginLeft: '3px',
                        marginTop: '10px'
                    }}
                >
                    TEXT CHANNELS
                </Typography>
            </TextChannelsHeader>
            <MainContainer>
                {
                    DUMMY_CHANNELS.map((channel, idx) => (
                        <ChannelsListItem 
                            key={channel.id} 
                            id={channel.id}
                            channelName={channel.channelName}
                        />
                    ))
                }
            </MainContainer>
        </>
    )
}

export default ChannelsList