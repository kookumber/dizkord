export const chatRoomActions = {
    OPEN_ROOM: 'ROOM.OPEN_ROOM',
    SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
    SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
    SET_LOCAL_STREAM: 'ROOM.SET_LOCAL_STREAM',
    SET_REMOTE_STREAMS: 'ROOM.SET_REMOTE_STREAMS',
    SET_AUDIO_ONLY: 'ROOM.SET_AUDIO_ONLY',
    SET_SCREEN_SHARE_STREAM: 'ROOM.SET_SCREEN_SHARE_STREAM'
}

export const getActions = (dispatch) => {
    return {
        setAudioOnly: (onlyAudio) => dispatch(setAudioOnly(onlyAudio)),
        setScreenShareStream: (stream) => dispatch(setScreenShareStream(stream))
    }
}

// Will provide details on if user is the creator of room and if room is open
export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
    return {
        type: chatRoomActions.OPEN_ROOM,
        isUserRoomCreator,
        isUserInRoom
    }
}

export const setRoomDetails = (roomDetails) => {
    return {
        type: chatRoomActions.SET_ROOM_DETAILS,
        roomDetails
    }
}

export const setActiveRooms = (activeRooms) => {
    return {
        type: chatRoomActions.SET_ACTIVE_ROOMS,
        activeRooms
    }
}

export const setLocalStream = (localStream) => {
    return {
        type: chatRoomActions.SET_LOCAL_STREAM,
        localStream
    }
}

export const setAudioOnly = (audioOnly) => {
    return {
        type: chatRoomActions.SET_AUDIO_ONLY,
        audioOnly
    }
}

export const setRemoteStreams = (remoteStreams) => {
    return {
        type: chatRoomActions.SET_REMOTE_STREAMS,
        remoteStreams
    }
}

export const setScreenShareStream = (stream) => {
    return {
        type: chatRoomActions.SET_SCREEN_SHARE_STREAM,
        isScreenSharingActive: stream ? true : false,
        screenSharingStream: stream || null
    }
}