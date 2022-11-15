import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'

const ScreenShareButton = () => {
    const [isScreenSharingActive, setIsScreenSharingActive] = useState(false)
    
    const handleScreenShare = () => {
        setIsScreenSharingActive(!isScreenSharingActive)
    }

    return (
        <IconButton onClick={handleScreenShare} style={{ color: 'white' }}>
            {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
        </IconButton>
    )
}

export default ScreenShareButton