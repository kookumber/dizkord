import * as api from '../../utils/api/apis'

export const channelActions = {
    SET_CURRENT_CHANNEL: 'CHANNEL.SET_CURRENT_CHANNEL',
    POST_CHANNEL: 'CHANNEL.POST_CHANNEL'
}

export const getActions = (dispatch) => {
    return {
        createChannel: (channelDetails) => dispatch(createChannel(channelDetails)),
        postChannel: (channelDetails) => dispatch(postChannel(channelDetails)),
        setCurrentChannel: (currentChannelDetails) => dispatch(setCurrentChannel(currentChannelDetails))
    }
}

export const setCurrentChannel = (currentChannelDetails) => {
    return {
        type: channelActions.SET_CURRENT_CHANNEL,
        currentChannelDetails
    }
}

export const postChannel = (channelDetails) => {
    return {
        type: channelActions.POST_CHANNEL,
        channelDetails
    }
}

const createChannel = (channelDetails) => {
    return async (dispatch) => {
        const response = await api.createChannel(channelDetails)

        if (response.error) {
            console.log(response)
        } else {
            console.log('Channel has been successfully created!')
        }
    }
}