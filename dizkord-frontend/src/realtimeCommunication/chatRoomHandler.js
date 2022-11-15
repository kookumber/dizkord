import store from "../store/store"
import { setOpenRoom } from "../store/actions/chatRoomActions"

export const createNewChatRoom = () => {
    store.dispatch(setOpenRoom(true, true))
}