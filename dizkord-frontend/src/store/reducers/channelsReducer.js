import { channelActions } from "../actions/channelActions";

const initState = {
    channels: [],
    currentChannel : {},
    newChannel: {}
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case channelActions.POST_CHANNEL:
            return {
                ...state,
                newChannel: action.channelDetails
            }
        case channelActions.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.currentChannelDetails
            }
        default:
            return state
    }
}

export default reducer