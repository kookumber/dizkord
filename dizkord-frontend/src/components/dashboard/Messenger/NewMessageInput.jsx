import React, { useState } from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";

const MainContainer = styled('div')({
    height: '60px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const Input = styled('input')({
    backgroundColor: '#40444b',
    width: '98%',
    height: '44px',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    padding: '0 10px',

})

const NewMessageInput = ({ chosenChatDetails }) => {
    
    const [message, setMessage] = useState('')
    
    const handleMessageValueChange = (event) => {
        setMessage(event.target.value)
    }

    const handleSendMessage = () => {
        console.log("sending message to server")
        setMessage('')
    }

    const handleKeyPressed = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage()
        }
    }

    return (
        <MainContainer className="message-input-container">
            <Input 
                className="message-input"
                placeholder={`Message @${chosenChatDetails.username}`}
                value={message}
                onChange={handleMessageValueChange}
                onKeyDown={handleKeyPressed}
            />
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat,
    }
}

export default connect(mapStoreStateToProps)(NewMessageInput)