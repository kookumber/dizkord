import React, { useEffect, useRef } from "react";
import { styled } from "@mui/system";

const MainContainer = styled('div')({
    height: '50%',
    width: '50%',
    backgroundColor: 'black',
    borderRadius: '8px'
})

// The video element is a native HTML element that we can create 
const VideoEl = styled('video')({
    width: '100%',
    height: '100%',
})

const Video = ({ stream, isLocalStream }) => {
    
    const videoRef = useRef()

    // useEffect will re-render anytime somethings changes in the stream,  
    // which we pass below
    useEffect(() => {
        const video = videoRef.current;
        video.srcObject = stream

        video.onloadedmetadata = () => {
            video.play()
        }
    }, [stream])

    return (
        <MainContainer>
            <VideoEl ref={videoRef} autoPlay mute={isLocalStream ? true : false} />
        </MainContainer>
    )
}

export default Video
