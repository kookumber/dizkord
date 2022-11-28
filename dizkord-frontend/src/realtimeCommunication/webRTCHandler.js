import store from "../store/store"
import { setLocalStream, setRemoteStreams } from "../store/actions/chatRoomActions"
import Peer from 'simple-peer'
import * as socketConnection from './socketConnection'


const getConfiguration = () => {
    const turnIceServers = null

    if (turnIceServers) {
        // TODO use TURN server credentials
    } else {
        console.warn('Using only STUN server')
        return {
            iceServers: [
                {
                    urls: 'stun:stun.l.google.com:19302'
                }
            ]
        }
    }
}

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

let peers = {}

export const prepareNewPeerConnection = (connUserSocketId, isConnInitiator) => {
    const localStream = store.getState().chatRoom.localStream

    if (isConnInitiator) {
        console.log('preparing new peer conn as initiator')
    } else {
        console.log('preparing new peer conn as not initiator')
    }

    // With the peers object we create, we'll create a new Peer using the simple-peer 
    // module with the keey of the socketId, and pass some configs
    peers[connUserSocketId] = new Peer({
        initiator: isConnInitiator, //If true, simple-peer will try to auto connect with other users
        config: getConfiguration(),
        stream: localStream
    })
    peers[connUserSocketId].on('signal', (data) => {
        const signalData = {
            signal: data,
            connUserSocketId: connUserSocketId
        }

        socketConnection.signalPeerData(signalData)
        // Pass signaling data to other users
        // socketConnection.signalPeerData(signalData)
    })

    peers[connUserSocketId].on('stream', (remoteStream) => {
        // add new remote stream to our server store
        console.log('remote stream came from other user')
        console.log('direct connection has been established')

        remoteStream.connUserSocketId = connUserSocketId
        addNewRemoteStream(remoteStream)
    })
}

export const handleSignalingData = (data) => {
    const { connUserSocketId, signal } = data

    if (peers[connUserSocketId]) {
        peers[connUserSocketId].signal(signal)
    }
}

const addNewRemoteStream = (remoteStream) => {
    // Get array of remote streams from store
    const remoteStreams = store.getState().chatRoom.remoteStreams

    // Create a new array cloning previous remote streams and adding the new one from the connecting user
    const newRemoteStreams = [...remoteStreams, remoteStream]

    store.dispatch(setRemoteStreams(newRemoteStreams))
}