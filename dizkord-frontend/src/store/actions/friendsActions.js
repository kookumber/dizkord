import * as api from '../../utils/api/apis'

export const friendsActions = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITE: 'FRIENDS.SET_PENDING_FRIENDS_INVITE',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
}

export const getActions = (dispatch) => {
    return {
        sendFriendInvite: (data, closeDialogHandler) => dispatch(sendFriendInvite(data, closeDialogHandler)),
        
    }
}

// We're gonna dispatch this action to change our store state 
export const setPendingFriendInvites = (pendingFriendInvites) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITE,
        pendingFriendInvites
    }
}


// This is will run our function to connect to backend api to send a post request
// to make a friend invite
const sendFriendInvite = (data, closeDialogHandler) => {
    return async () => {
        const response = await api.sendFriendInvite(data)

        if (response.error) {
            console.log("friend invite error", response.error)
        } else {
            // dispatch(openAlertMessage('Invite has been sent!'))
            console.log('Invite has been sent!')
            closeDialogHandler()
        }
    }
}