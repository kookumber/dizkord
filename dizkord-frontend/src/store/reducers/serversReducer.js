import { serverActions } from "../actions/serverActions";

const initState = {
    servers: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case serverActions.SET_USERS_SERVERS:
            return {
                ...state,
                servers: action.usersServers
            }
        case serverActions.SET_CURRENT_SERVER_DETAILS:
            return {
                ...state,
                currentServer: action.currentServersDetails
            }
        default:
            return state
    }
}

export default reducer