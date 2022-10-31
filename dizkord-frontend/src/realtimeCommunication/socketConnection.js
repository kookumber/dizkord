import io from 'socket.io-client'
import { setPendingFriendsInvites, setFriends, setOnlineUsers } from '../store/actions/friendsActions'
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
        store.dispatch(setPendingFriendsInvites(pendingInvites))
    })
    
    socket.on('friends-list', (data) => {
        const { friends } = data;
        store.dispatch(setFriends(friends))
    })

    // Within our socket server, we created an emit function that connects with this
    // client side through online-users so we can pass list of users from backend to frontend
    socket.on('online-users', (data) => {
        const { onlineUsers } = data;
        store.dispatch(setOnlineUsers(onlineUsers))
    })
}