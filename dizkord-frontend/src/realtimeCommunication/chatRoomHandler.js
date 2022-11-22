import store from "../store/store"
import { setActiveRooms, setOpenRoom, setRoomDetails } from "../store/actions/chatRoomActions"
import * as socketConnection from './socketConnection'

export const createNewChatRoom = () => {
    store.dispatch(setOpenRoom(true, true))
    socketConnection.createNewRoom()
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
    // Set the room details redux state for the user when they join the room
    store.dispatch(setRoomDetails({ roomId }))

    // run the setOpenRoom function and pass params of False for isUserCreator and True for isUserInRoom
    store.dispatch(setOpenRoom(false, true))

    socketConnection.joinChatRoom({ roomId })
}

export const leaveChatRoom = () => {
    // Since we set details for the video chat room we've joined
    // we can get the id from the storeState to leave
    const roomId = store.getState().chatRoom.roomDetails.roomId

    // Leave the chatroom
    socketConnection.leaveChatRoom({ roomId })

    // Set room details in redux state to null
    store.dispatch(setRoomDetails(null))
    // Indicate the current user is not in the chat room or is the creator in
    // order to close
    store.dispatch(setOpenRoom(false, false))
}