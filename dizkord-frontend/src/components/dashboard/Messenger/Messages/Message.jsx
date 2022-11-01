import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Avatar from "../../../sharedComponents/Avatar";

const MainContainer = styled('div')({
    width: '98%',
    display: 'flex',
    marginTop: '20px'
})

const AvatarContainer = styled('div')({
    width: '65px'
})

const MessageContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column'
})

const MessageContent = styled('div')({
    color: '#dcddde'
})

const SameAuthorMessageContent = styled('div')({
    color: '#dcddde',
    width: '98%',
    marginTop: '5px'
})

const SameAuthorMessageText = styled('span')({
    marginLeft: '65px',
})

const Message = ({ content, sameAuthor, username, date, sameDay  }) => {
    if (sameAuthor && sameDay) {
        return (
            <SameAuthorMessageContent>
                <SameAuthorMessageText>
                    { content }
                </SameAuthorMessageText>
            </SameAuthorMessageContent>
        )
    }

    return (
        <MainContainer className="message-container">
            <AvatarContainer>
                <Avatar username={username} />
            </AvatarContainer>
            <MessageContainer>
                <Typography
                    style={{ fontSize: '15px', color: 'white', fontWeight: 'bold' }}
                >
                    {username}{' '}
                    <span style={{ fontSize: '12px', color: '#72767d' }}>
                        {date}
                    </span>
                </Typography>
                <MessageContent>{content}</MessageContent>
            </MessageContainer>
        </MainContainer>
    )
}

export default Message