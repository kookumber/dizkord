import { authActions } from "../actions/authActions";

const initState = {
    userDetails: null,
    error: null
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case authActions.SET_USER_DETAILS:
            return {
                ...state,
                userDetails: action.userDetails,
            };
        case authActions.SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.errorMessage
            }
        default:
            return state;
    }
}

export default reducer