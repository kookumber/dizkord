import React from "react";
import IconButton from "@mui/material/IconButton";
import ScreenShareIcon from '@mui/icons-material/ScreenShare'
import StopScreenShareIcon from '@mui/icons-material/StopScreenShare'
import * as webRTCHandler from '../../../../realtimeCommunication/webRTCHandler'

const constraints = {
    audio: false,
    video: true
}

const ScreenShareButton = ({ localStream, screenSharingStream, setScreenShareStream, isScreenSharingActive}) => {
    // const [isScreenSharingActive, setIsScreenSharingActive] = useState(false)
    
    const handleScreenShareToggle = async () => {
        // setIsScreenSharingActive(!isScreenSharingActive)
        if (!isScreenSharingActive) {
            let stream = null;
            try {
                stream = await navigator.mediaDevices.getDisplayMedia(constraints)
            } catch (error) {
                console.log("Error trying to get access to screen share")
            }

            if (stream) {
                setScreenShareStream(stream)
                webRTCHandler.switchOutgoingTracks(stream)
            }
        } else {
            webRTCHandler.switchOutgoingTracks(localStream)

            screenSharingStream.getTracks().forEach((track) => {
                track.stop();
                setScreenShareStream(null)
            })
        }
    }

    return (
        <IconButton onClick={handleScreenShareToggle} style={{ color: 'white' }}> 
            {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
        </IconButton>
    )
}

export default ScreenShareButton