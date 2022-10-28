import { friendsActions } from "../actions/friendsActions"

const initState = {
    friends: [],
    pendingFriendsInvite: [],
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
                pendingFriendsInvite: action.pendingFriendsInvite
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