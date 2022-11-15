import React from "react";
import { styled } from "@mui/system";
import ScreenShareButton from "./RoomButtons/ScreenShareButton";
import MicButton from "./RoomButtons/MicButton";
import CloseRoomButton from "./RoomButtons/CloseRoomButton";
import CameraButton from "./RoomButtons/CameraButton";


const MainContainer = styled('div')({
    height: '15%',
    width: '100%',
    display: 'flex',
    backgroundColor: '#5865f2',
    flexWrap: 'wrap',
    // borderTopLeftRadius: '8px',
    // borderTopRightRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})


const ChatRoomButtons = () => {
    return (
        <MainContainer>
            <ScreenShareButton />
            <MicButton />
            <CameraButton />
            <CloseRoomButton />
        </MainContainer>
    )
}

export default ChatRoomButtons