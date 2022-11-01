import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";
import MessagesHeader from './MessagesHeader'
import { connect } from "react-redux";

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
        <MainContainer>
            <MessagesHeader username={chosenChatDetails?.username}/>
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat 
    }
}

export default connect(mapStoreStateToProps)(Messages)