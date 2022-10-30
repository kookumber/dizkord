import io from 'socket.io-client'
import { setPendingFriendsInvites } from '../store/actions/friendsActions'
import store from '../store/store'

let socket = null


export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken,
        },
    })

    socket.on('connect', () => {
        console.log('Successfully connected with socket.io server')
        console.log(socket.id)
    })

    socket.on('friends-invite', (data) => {
        // pendingInvites will come from our sendFriendInvite action in our friendsActions frontend
        // which will use the friends reducer to return pending friend invites
        const { pendingInvites } = data
        console.log('friends invite event came')
        console.log(pendingInvites)
        store.dispatch(setPendingFriendsInvites(pendingInvites))
    })
}