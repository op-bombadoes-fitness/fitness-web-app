import { combineReducers } from 'redux'
import { RECEIVE_PLANS } from '../constants/ActionTypes'

const plans = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PLANS:
            return {
                ...state,
                ...action.plans.reduce((obj, plan) => {
                    obj[plan.id] = plan
                    return obj
                }, {})
            }
        default:
            return state
    }
}

export default plans

// const plans = (state, action) => {
//     switch (action.type) {
//         // case ADD_TO_CART:
//         //   return {
//         //     ...state,
//         //     inventory: state.inventory - 1
//         //   }
//         default:
//             return state
//     }
// }

// const byId = (state = {}, action) => {
//     switch (action.type) {
//         case RECEIVE_PLANS:
//             return {
//                 ...state,
//                 ...action.plans.reduce((obj, plan) => {
//                     obj[plan.id] = plan
//                     return obj
//                 }, {})
//             }
//         default:
//             const { productId } = action
//             if (productId) {
//                 return {
//                     ...state,
//                     [productId]: plans(state[productId], action)
//                 }
//             }
//             return state
//     }
// }

// const visibleIds = (state = [], action) => {
//     switch (action.type) {
//         case RECEIVE_PRODUCTS:
//             return action.products.map(product => product.id)
//         default:
//             return state
//     }
// }

// export default combineReducers({
//     byId
//     // visibleIds
// })

// export const getPlan = (state, id) =>
//     state.byId[id]

// export const getVisibleProducts = state =>
//     state.visibleIds.map(id => getProduct(state, id))
