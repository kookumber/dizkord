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
        default:
            return state
    }
}

export default reducer