export const chatRoomActions = {
    OPEN_ROOM: 'ROOM.OPEN_ROOM',
    SET_ROOM_DETAILS: 'ROOM.SET_ROOM_DETAILS',
    SET_ACTIVE_ROOMS: 'ROOM.SET_ACTIVE_ROOMS',
    SET_LOCAL_STREAM: 'ROOM.SET_LOCAL_STREAM',
    SET_REMOTE_STREAMS: 'ROOM.SET_REMOTE_STREAMS',
    SET_AUDIO_ONLY: 'ROOM.SET_AUDIO_ONLY',
    SET_SCREEN_SHARE_STREAM: 'ROOM.SET_SCREEN_SHARE_STREAM'
}

// Will provide details on if user is the creator of room and if room is open
export const setOpenRoom = (isUserRoomCreator = false, isUserInRoom = false) => {
    return {
        type: chatRoomActions.OPEN_ROOM,
        isUserRoomCreator,
        isUserInRoom
    }
}