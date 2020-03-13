import { combineReducers } from 'redux'
// import cart, * as fromCart from './cart'
import plans, * as fromPlans from './plans'
import sessions, * as fromSessions from './sessions'

export default combineReducers({
  plans,
  sessions
})

// const getAddedIds = state => fromCart.getAddedIds(state.cart)
// const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
// const getPlan = (state, id) => fromPlans.getPlan(state.plans, id)

// export const getTotal = state =>
//   getAddedIds(state)
//     .reduce((total, id) =>
//       total + getPlan(state, id).price * getQuantity(state, id),
//       0
//     )
//     .toFixed(2)

// export const getCartProducts = state =>
//   getAddedIds(state).map(id => ({
//     ...getProduct(state, id),
//     quantity: getQuantity(state, id)
//   }))
