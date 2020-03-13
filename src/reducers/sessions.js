import { combineReducers } from 'redux'
import { RECEIVE_SESSIONS } from '../constants/ActionTypes'

const sessions = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_SESSIONS:
            return action.sessions.map(session => session)
        default:
            return state
    }
}

export const getActiveSessions = state =>
    state.sessions

export default sessions