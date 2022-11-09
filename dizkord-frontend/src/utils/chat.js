import store from '../store/store'
import { setMessages } from '../store/actions/chatActions'


// This function gets called from the socket connection whenever the server emits an event
// of 'direct-chat-history', and the server provides data of the new chat history
export const updateDirectChatHistoryIfActive = (data) => {
    const { participants, messages } = data

    // Find id of user from token and id from active conversation
    const receiverId = store.getState().chat.chosenChatDetails?.id
    const userId = store.getState().auth.userDetails._id

    if (receiverId && userId) {
        const usersInConversations = [receiverId, userId]

        updateChatHistoryIfSameConversation({
            participants,
            usersInConversations,
            messages
        })
    }
}


const updateChatHistoryIfSameConversation = ({
    participants,
    usersInConversations,
    messages
}) => {
    // The result is checking that the participants passed by the server data
    // matches exactly the user that is active and the user receiving a message
    const result = participants.every((participantId) => {
        return usersInConversations.includes(participantId)
    })
    // Only then will we update the state, this way, state is not updated for every
    // single user
    if (result) {
        store.dispatch(setMessages(messages))
    }
}

export const updateChannelChatHistoryIfActive = (data) => {
    const { messages } = data
    
    // const channelId = store.getState().chat.chosenChatDetails?.channelId
    store.dispatch(setMessages(messages))
}