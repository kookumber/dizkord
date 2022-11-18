import { chatRoomActions } from "../actions/chatRoomActions"

const initState = {
    isUserInRoom: false,
    isUserRoomCreator: false,
    roomDetails: null,
    activeRooms: [],
    localStream: null,
    remoteStream: [],
    audioOnly: false,
    screenSharingStream: null,
    isScreenSharingActive: false
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
        default: 
            return state
    }
}

export default reducer