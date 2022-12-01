import React from "react";
import { styled } from "@mui/system";
import ScreenShareButton from "./RoomButtons/ScreenShareButton";
import MicButton from "./RoomButtons/MicButton";
import CloseRoomButton from "./RoomButtons/CloseRoomButton";
import CameraButton from "./RoomButtons/CameraButton";
import { connect } from 'react-redux'
import { getActions } from "../../../store/actions/chatRoomActions";

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


const ChatRoomButtons = (props) => {
    const { localStream, userJoinedWithAudioOnly } = props
    return (
        <MainContainer>
            { !userJoinedWithAudioOnly && <CameraButton localStream={localStream} />}
            <ScreenShareButton { ...props } />
            <MicButton localStream={localStream} />
            <CloseRoomButton />
        </MainContainer>
    )
}

const mapStoreStateToProps = ({ chatRoom }) => {
    return {
        ...chatRoom,
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(ChatRoomButtons)