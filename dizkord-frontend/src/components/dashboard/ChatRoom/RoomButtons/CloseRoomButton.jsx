import React from "react";
import CloseIcon from '@mui/icons-material/Close'
import IconButton from "@mui/material/IconButton";

const CloseRoomButton = () => {

    const handleLeaveRoom = () => {

    }

    return (
        <IconButton onClick={handleLeaveRoom} style={{ color: 'white' }}>
            <CloseIcon />
        </IconButton>
    )
}

export default CloseRoomButton