import * as api from '../../utils/api/apis'

export const serverActions = {
    SET_CURRENT_SERVER_DETAILS: 'SERVER.SET_CURRENT_SERVER_DETAILS',
    SET_USERS_SERVERS: 'SERVER.SET_USERS_SERVERS',
    SET_ERROR_MESSAGE: 'SERVER.SET_ERROR_MESSAGE'
}

export const getActions = (dispatch) => {
    return {
        setCurrentServerDetails: (serverDetails) => dispatch(setCurrentServerDetails(serverDetails)),
        createServer: (serverDetails) => dispatch(createServer(serverDetails))
    }
}

export const setCurrentServerDetails = (currentServersDetails) => {
    return {
        type: serverActions.SET_CURRENT_SERVER_DETAILS,
        currentServersDetails
    }
}

export const setUsersServers = (usersServers) => {
    return {
        type: serverActions.SET_USERS_SERVERS,
        usersServers
    }
}

const setErrorMessage = (errorMessage) => {
    return {
        type: serverActions.SET_ERROR_MESSAGE,
        errorMessage
    }
}

const createServer = (serverDetails) => {
    return async (dispatch) => {
        const response = await api.createServer(serverDetails)

        if (response.error) {
            console.log("rep err", response)
            dispatch(setErrorMessage(response?.exception?.response?.data))
        } else {
            // const { serverDetails } = response?.data
            console.log('Server has been created!')
        }
    }
}