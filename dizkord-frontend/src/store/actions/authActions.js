import * as api from '../../utils/api/authApis'

export const authActions = {
    SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
    SET_ERROR_MESSAGE: 'AUTH.SET_ERROR_MESSAGE',
    RESET: 'AUTH.RESET'
}

export const getActions = (dispatch) => {
    return {
        login: (userDetails, history) => dispatch(login(userDetails, history)),
        register: (userDetails, history) => dispatch(register(userDetails, history)),
        reset: () => dispatch(reset())
    }
}

// Helper function to set our state
const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails
    }
}

const setErrorMessage = (errorMessage) => {
    return {
        type: authActions.SET_ERROR_MESSAGE,
        errorMessage
    }
}

const login = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.login(userDetails)

        if (response.error) {
            // show error message in alert
            dispatch(setErrorMessage(response?.exception?.response?.data))
            
        } else {
            const { userDetails } = response?.data;

            localStorage.setItem('user', JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))
            navigate('/dashboard')
        }
    }
}

const register = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.register(userDetails)

        if (response.error) {
            // show error message in alert
            dispatch(setErrorMessage(response?.exception?.response?.data))
            
        } else {
            const { userDetails } = response?.data;

            localStorage.setItem('user', JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))
            navigate('/dashboard')
        }
    }
}

const reset = () => {
    return async (dispatch) => {
        dispatch()
    }
}