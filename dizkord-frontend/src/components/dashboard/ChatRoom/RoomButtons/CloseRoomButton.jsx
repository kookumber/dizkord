import React from "react";
import CloseIcon from '@mui/icons-material/Close'
import IconButton from "@mui/material/IconButton";
import * as chatRoomHandler from '../../../../realtimeCommunication/chatRoomHandler'

const CloseRoomButton = () => {

    const handleLeaveRoom = () => {
        chatRoomHandler.leaveChatRoom()
    }

    return (
        <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
            <CloseIcon />
        </IconButton>
    )
}

export default CloseRoomButton