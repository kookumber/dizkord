import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers, applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import authReducer from './reducers/authReducer'
import friendsReducer from './reducers/friendsReducer'
import chatReducer from './reducers/chatReducers'
import serversReducer from './reducers/serversReducer'
import channelsReducer from './reducers/channelsReducer'
import chatRoomReducer from './reducers/chatRoomReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    friends: friendsReducer,
    chat: chatReducer,
    usersServers: serversReducer,
    channels: channelsReducer,
    chatRoom: chatRoomReducer
})

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk)),
 )

export default store