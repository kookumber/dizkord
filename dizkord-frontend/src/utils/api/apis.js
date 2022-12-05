import axios from 'axios';
import { logout } from '../auth';

const apiClient = axios.create({
    // baseURL: 'http://localhost:5002/api',
    baseURL: 'https://dizkord.onrender.com',
    timeout: 1000
})

// Run this block that intercepts http request before they get pushed to the server
// Doing this, we pass the token to the Auth header so user can access protected routes that require them to be logged in
apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user')

    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (err) => {
    return Promise.reject(err)
})

// Public routes

export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data)
    } catch (exception) {
        return {
            error: true,
            exception,
        }
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data)
    } catch (exception) {
        return {
            error: true,
            exception,
        }
    }
}

// Secure routes
export const sendFriendInvite = async (data) => {
    try {
        return await apiClient.post('/friend-invite/invite', data)
    } catch (exception) {
        checkResponseCode(exception)
        return {
            error: true,
            exception,
        }
    }
}

export const acceptFriendInvite = async (data) => {
    try {
        return await apiClient.post('/friend-invite/accept', data)
    } catch (exception) {
        checkResponseCode(exception)
        return {
            error: true,
            exception
        }
    }
}

export const rejectFriendInvite = async (data) => {
    try {
        return await apiClient.post('/friend-invite/reject', data)
    } catch (exception) {
        checkResponseCode(exception)
        return {
            error: true,
            exception
        }
    }
}

export const createServer = async (data) => {
    try {
        return await apiClient.post('/server/create', data)
    } catch (exception) {
        checkResponseCode(exception)
        return {
            error: true,
            exception
        }
    }
}

export const addServerParticipants = async (data) => {
    try {
        const response = await apiClient.patch('/server/joinserver', data)
        return response
    } catch (exception) {
        return {
            error: true,
            exception
        }
    }
}

export const createChannel = async (data) => {
    try {
        return await apiClient.post('/channels/create', data)
    } catch (exception) {
        checkResponseCode(exception)
        return {
            error: true,
            exception
        }
    }
}

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status
    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
}

