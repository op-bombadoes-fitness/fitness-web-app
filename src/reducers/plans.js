import { combineReducers } from 'redux'
import { RECEIVE_PLANS } from '../constants/ActionTypes'

const plans = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PLANS:
            // let plans = state.plans
            // plans = action.plans

            // return {
            //     ...state,
            //     plans
            // }

            // return Object.assign({}, state, {
            //     plans: [
            //         ...state.plans
            //     ]
            // })

            return action.plans.map(plan => plan)

        // return Object.assign({}, state, {
        //     plans: action.plans
        // })
        default:
            return state
    }
}

export const getActivePlans = state =>
    state.plans

export default plans

