import store from "../store/store"
import { setLocalStream } from "../store/actions/chatRoomActions"

// We'll set up these constraints to pass as objects to the browser
// when getting the user media
const onlyAudioConstraints = { audio: true, video: false }
const defaultConstraints = { audio: true, video: true}

export const getLocalStreamPreview = (onlyAudio = false, callbackFunc) => {
    // define contraints based on whether user wants only audio
    const constraints = onlyAudio ? onlyAudioConstraints : defaultConstraints

    // navigator.mediaDevices is given to us by browser by default 
    // which allow us to get access to the user. The function will return 
    // a promise
    navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        store.dispatch(setLocalStream(stream))
        callbackFunc();
    }).catch((err) => {
        console.log(err)
        console.log("Cannot get access to local stream")
    })
}