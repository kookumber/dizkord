import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput'
import { getDirectChatHistory, getChannelChatHistory } from "../../../realtimeCommunication/socketConnection";

const Wrapper = styled('div')({
    flexGrow: 1,
    width: '98%',
    marginLeft: '5px',
    marginTop: '5px',
    overflowY: 'auto',
    overflowX: 'hidden'
})

const MessengerContent = ({ chosenChatDetails }) => {

    // useEffect here will fetch chat history for specific user
    useEffect(() => {
        if (chosenChatDetails.username) {
            getDirectChatHistory({
                receiverUserId: chosenChatDetails.id,
            })
        }

        if (chosenChatDetails.channelName) {
            getChannelChatHistory({
                channelId: chosenChatDetails.id
            })
        }
    }, [chosenChatDetails])

    return (
        <Wrapper className="messenger-content">
            <Messages />
            <NewMessageInput />
        </Wrapper>
    )
}

export default MessengerContent