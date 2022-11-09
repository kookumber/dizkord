import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import WelcomeMessage from './WelcomeMessage'
import MessengerContent from './MessengerContent'

const MainContainer = styled('div')({
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#36393f",
    marginTop: '48px'
})

const Messenger = ({ chosenChatDetails, chatType }) => {
    
    return (
        <MainContainer className="messenger-container">
            { !chosenChatDetails ? <WelcomeMessage /> : <MessengerContent chosenChatDetails={chosenChatDetails} chatType={chatType}/>}
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat
    }
}

export default connect(mapStoreStateToProps)(Messenger)