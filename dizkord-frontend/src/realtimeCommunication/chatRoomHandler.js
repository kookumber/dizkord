import store from "../store/store"
import { setActiveRooms, setOpenRoom, setRoomDetails, setLocalStream, setRemoteStreams, setScreenShareStream, setUserJoinedWithAudioOnly } from "../store/actions/chatRoomActions"
import * as socketConnection from './socketConnection'
import * as webRTCHandler from './webRTCHandler'


export const createNewChatRoom = () => {
    const successCallback = () => {
        store.dispatch(setOpenRoom(true, true))

        const audioOnly = store.getState().chatRoom.audioOnly
        store.dispatch(setUserJoinedWithAudioOnly(audioOnly))
        socketConnection.createNewRoom()
    }

    const audioOnly = store.getState().chatRoom.audioOnly
    // Running the getLocalStreamPreview, we try to access the clients media
    // using navigator.mediaDevices.getUserMedia, which will return a promise of a stream
    // If the that works, then we run the successCallback there, other error is caught
    webRTCHandler.getLocalStreamPreview(audioOnly, successCallback)

}

export const newRoomCreated = (data) => {
    const { roomDetails } = data
    store.dispatch(setRoomDetails(roomDetails))
}

export const updateActiveRooms = (data) => {
    const { activeRooms } = data
    
    const friends = store.getState().friends.friends

    const rooms = []

    activeRooms.forEach((room) => {
        friends.forEach((friend) => {
            if (friend.id === room.roomCreator.userId) {
                rooms.push({ ...room, creatorUsername: friend.username })
            }
        })
    })

    store.dispatch(setActiveRooms(rooms))

}

export const joinChatRoom = (roomId) => {

    const successCallback = () => {
        // Set the room details redux state for the user when they join the room
        store.dispatch(setRoomDetails({ roomId }))
        // run the setOpenRoom function and pass params of False for isUserCreator and True for isUserInRoom
        store.dispatch(setOpenRoom(false, true))

        const audioOnly = store.getState().chatRoom.audioOnly
        store.dispatch(setUserJoinedWithAudioOnly(audioOnly))
        // Execute joinChatRoom from socketConnection to emit event to backend
        // of video chat room id user is joining
        socketConnection.joinChatRoom({ roomId })
    }
    const audioOnly = store.getState().chatRoom.audioOnly
    // Similar to createChatRoom, get the video stream befow running all funcs in
    // our success callback that we pass down to getLocalStreamPreview
    webRTCHandler.getLocalStreamPreview(audioOnly, successCallback)
}

export const leaveChatRoom = () => {
    // Since we set details for the video chat room we've joined
    // we can get the id from the storeState to leave
    const roomId = store.getState().chatRoom.roomDetails.roomId

    // Get local stream so we can turn off the video chat on the client cpu
    const localStream = store.getState().chatRoom.localStream
    if(localStream) {
        localStream.getTracks().forEach((track) => {
            track.stop();
            store.dispatch(setLocalStream(null));
        })
    }

    // Check if we're sharing screen and if so, get all streams and stop streaming screen share
    const screenSharingStream = store.getState().chatRoom.screenSharingStream
    if (screenSharingStream) {
        screenSharingStream.getTracks().forEach((track) => {
            track.stop()
            store.dispatch(setScreenShareStream(null))
        })
    }

    store.dispatch(setRemoteStreams([]))
    webRTCHandler.closeAllConnections()

    // Leave the chatroom
    socketConnection.leaveChatRoom({ roomId })

    // Set room details in redux state to null
    store.dispatch(setRoomDetails(null))
    // Indicate the current user is not in the chat room or is the creator in
    // order to close
    store.dispatch(setOpenRoom(false, false))
}