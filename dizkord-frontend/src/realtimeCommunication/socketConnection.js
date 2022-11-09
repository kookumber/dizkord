import io from 'socket.io-client'
import { setPendingFriendsInvites, setFriends, setOnlineUsers } from '../store/actions/friendsActions'
import { setUsersServers } from '../store/actions/serverActions'
import store from '../store/store'
import { updateDirectChatHistoryIfActive, updateChannelChatHistoryIfActive } from '../utils/chat'

let socket = null

// This function listens to events from the backend
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

    socket.on('direct-chat-history', (data) => {
        updateDirectChatHistoryIfActive(data)
    })

    socket.on('channel-chat-history', (data) => {
        updateChannelChatHistoryIfActive(data)
    })

    socket.on('users-servers', (data) => {
        const { usersServers } = data
        store.dispatch(setUsersServers(usersServers))

    })
}

// Socket.io enables bi-directional communication, thus allowing us to emit events
// to the server, along with the data, which is this case will be messages
// The below functions allow us to send messages and request data
export const sendDirectMessage = (data) => {
    console.log(data)
    socket.emit('direct-message', data)
}

export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data)
}

export const sendChannelMessage = (data) => {
    socket.emit('channel-chat-message', data)
}

export const getChannelChatHistory = (data) => {
    socket.emit('channel-chat-history', data)
}