import React, { useState } from "react";
import { styled } from "@mui/system";
import ResizeRoomButton from './ResizeRoomButton'
import VideosContainer from "./VideosContainer";
import ChatRoomButtons from "./ChatRoomButtons";

const MainContainer = styled('div')({
    position: 'absolute',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#202225'
})

const fullScreenRoomStyle = {
    width: '100%',
    height: '100vh',
}

const minimizedRoomStyle = {
    bottom: '0px',
    right: '0px',
    width: '30%',
    height: '40vh'
}

const ChatRoom = () => {

    const [isRoomMinimized, setIsRoomMinimized] = useState(true)

    const roomResizeHandler = () => {
        setIsRoomMinimized(!isRoomMinimized)
    }

    return (
        <MainContainer
            style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}
        >
            <VideosContainer />
            <ChatRoomButtons />
            <ResizeRoomButton
                isRoomMinimized={isRoomMinimized}
                handleRoomResize={roomResizeHandler}
            />
        </MainContainer>
    )
}

export default ChatRoom