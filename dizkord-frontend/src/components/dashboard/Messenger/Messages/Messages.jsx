import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import MessagesHeader from './MessagesHeader'
import { connect } from "react-redux";
import Message from "./Message";
import DUMMY_MESSAGES from "./DUMMY_MESSAGES";

const MainContainer = styled('div')({
    height: 'calc(100% - 60px)',
    width: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
})


const Messages = ({ chosenChatDetails, messages }) => {
    return (
        <MainContainer className="messages-wrapper">
            <MessagesHeader username={chosenChatDetails?.username}/>
            {
                DUMMY_MESSAGES.map((message, idx) => {
                    return (
                        <Message 
                            key={message._id}
                            content={message.content}
                            username={message.author.username}
                            sameAuthor={message.sameAuthor}
                            date={message.date}
                            sameDay={message.sameDay}
                        />
                    )
                })
            }
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat 
    }
}

export default connect(mapStoreStateToProps)(Messages)