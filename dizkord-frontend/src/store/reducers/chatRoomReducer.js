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

}

export default reducer