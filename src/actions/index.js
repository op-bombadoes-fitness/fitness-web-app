import train from '../api/train'
import * as types from '../constants/ActionTypes'

const receivePlans = plans => ({
    type: types.RECEIVE_PLANS,
    plans
})

export const getAllPlans = () => dispatch => {
    train.getAllPlans(plans => {
        dispatch(receivePlans(plans))
    })
}

// const addToCartUnsafe = productId => ({
//   type: types.ADD_TO_CART,
//   productId
// })

// export const addToCart = productId => (dispatch, getState) => {
//   if (getState().products.byId[productId].inventory > 0) {
//     dispatch(addToCartUnsafe(productId))
//   }
// }

// export const checkout = products => (dispatch, getState) => {
//   const { cart } = getState()

//   dispatch({
//     type: types.CHECKOUT_REQUEST
//   })
//   shop.buyProducts(products, () => {
//     dispatch({
//       type: types.CHECKOUT_SUCCESS,
//       cart
//     })
//     // Replace the line above with line below to rollback on failure:
//     // dispatch({ type: types.CHECKOUT_FAILURE, cart })
//   })
// }
