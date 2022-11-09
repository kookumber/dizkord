import React from "react";
import { styled } from "@mui/system";
import Avatar from "../../../sharedComponents/Avatar";
import { Typography } from "@mui/material";

const MainContainer = styled('div')({
    width: '100%',
    display: 'column',
    marginTop: '10px'
})

const MessagesHeader = ({ username = "", channelName = "" }) => {
    
    const avatarText = username.length > 0 ? username : '#'
    const headerText = username.length > 0 ? username : `Welcome to #${channelName}!`
    const subText = username.length > 0 ? 
            `This is the beginning of your message history with @${ username }` 
            : 
            `This is the start of the #${channelName.toLowerCase().split(' ').join('-')} channel.`
    
    return (
        <MainContainer className="message-header">
            <Avatar large username={avatarText} />
            <Typography 
                variant="h4"
                sx={{
                    fontWeight: 'bold',
                    color: 'white',
                    marginLeft: '5px',
                    marginRight: '5px'
                }}
            >
                {headerText}
            </Typography>
            <Typography
                sx={{
                    color: '#b9bbbe',
                    marginLeft: '5px',
                    marginRight: '5px'
                }}
            >
                {subText}
            </Typography>
        </MainContainer>
    )
}

export default MessagesHeader