import store from '../store/store'
import { setMessages } from '../store/actions/chatActions'


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
    const result = participants.every((participantId) => {
        return usersInConversations.includes(participantId)
    })

    if (result) {
        store.dispatch(setMessages(messages))
    }
}