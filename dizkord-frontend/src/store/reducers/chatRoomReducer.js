import { chatRoomActions } from "../actions/chatRoomActions"

const initState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStreams: [],
    audioOnly: false,
    screenSharingStream: null,
    isScreenSharingActive: false,
    userJoinedWithAudioOnly: false
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case chatRoomActions.OPEN_ROOM:
            return {
                ...state,
                isUserRoomCreator: action.isUserRoomCreator,
                isUserInRoom: action.isUserInRoom
            }
        case chatRoomActions.SET_ROOM_DETAILS:
            return {
                ...state,
                roomDetails: action.roomDetails
            }
        case chatRoomActions.SET_ACTIVE_ROOMS:
            return {
                ...state,
                activeRooms: action.activeRooms
            }
        case chatRoomActions.SET_LOCAL_STREAM:
            return {
                ...state,
                localStream: action.localStream
            }
        case chatRoomActions.SET_AUDIO_ONLY:
            return {
                ...state,
                audioOnly: action.audioOnly
            }
        case chatRoomActions.SET_REMOTE_STREAMS:
            return {
                ...state,
                remoteStreams: action.remoteStreams
            }
        case chatRoomActions.SET_SCREEN_SHARE_STREAM:
            return {
                ...state,
                screenSharingStream: action.screenSharingStream,
                isScreenSharingActive: action.isScreenSharingActive
            }
        case chatRoomActions.SET_USER_JOINED_WITH_AUDIO_ONLY:
            return {
                ...state,
                userJoinedWithAudioOnly: action.userJoinedWithAudioOnly
            }
        default: 
            return state
    }
}

export default reducer