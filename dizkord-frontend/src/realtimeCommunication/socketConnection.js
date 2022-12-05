import io from 'socket.io-client'
import { setPendingFriendsInvites, setFriends, setOnlineUsers } from '../store/actions/friendsActions'
import { setUsersServers } from '../store/actions/serverActions'
import store from '../store/store'
import { updateDirectChatHistoryIfActive, updateChannelChatHistoryIfActive } from '../utils/chat'
import * as chatRoomHandler from './chatRoomHandler'
import * as webRTCHandler from './webRTCHandler'

let socket = null

// This function listens to events from the backend
export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token
    // socket = io('http://localhost:5002', {
    //     auth: {
    //         token: jwtToken,
    //     },
    // })
    socket = io('https://dizkord-api.onrender.com', {
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

    socket.on('room-create', (data) => {
        // Backend will emit data for new chat room details
        chatRoomHandler.newRoomCreated(data)
    })

    socket.on('prepare-for-connection', (data) => {
        const { connUserSocketId } = data
        // When a user joins a chatroom and sends an event to other users in the room to 
        // "prepare-for-connection", the webRTCHandler will get the data and add the connecting user
        // to list of users connected
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, false)

        // Additionally, the user receiving the prepare-for-connection event will in turn
        // emit back to the server their socketId so the user will get that connection
        socket.emit('conn-init', { connUserSocketId: connUserSocketId })
    })

    socket.on('conn-init', (data) => {
        const { connUserSocketId } = data
        webRTCHandler.prepareNewPeerConnection(connUserSocketId, true)
    })

    socket.on('conn-signal', (data) => {
        webRTCHandler.handleSignalingData(data)
    })

    socket.on('room-participant-left', (data) => {
        // const { connUserSocketId } = data
        console.log('user left room')
        webRTCHandler.handleParticipantLeftRoom(data)

    })

    socket.on('active-rooms', (data) => {
        chatRoomHandler.updateActiveRooms(data)
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

export const createNewRoom = () => {
    socket.emit('room-create')
}

// Will get called in the chatRoomHandler on the frontend from the parallel function
export const joinChatRoom = (data) => {
    socket.emit('room-join', data)
}

export const leaveChatRoom = (data) => {
    socket.emit('room-leave', data)
}

export const signalPeerData = (signalData) => {
    socket.emit('conn-signal', signalData)
}