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
        default: 
            return state
    }
}

export default reducer