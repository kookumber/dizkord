import { friendsActions } from "../actions/friendsActions"

const initState = {
    friends: [],
    pendingFriendsInvites: [],
    onlineUsers: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case friendsActions.SET_FRIENDS:
            return {
                ...state,
                friends: action.friends
            }
        case friendsActions.SET_PENDING_FRIENDS_INVITE:
            return {
                ...state,
                pendingFriendsInvites: action.pendingFriendsInvites
            }
        case friendsActions.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: action.onlineUsers
            }
        default:
            return state
    }
}

export default reducer