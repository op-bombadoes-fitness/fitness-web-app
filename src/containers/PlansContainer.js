import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { addToCart } from '../actions'
import { getActivePlans } from '../reducers/plans'
import PlansList from '../components/PlansList'

const PlansContainer = ({ plans }) => (
  <PlansList plans={plans} />
)

const mapStateToProps = (state) => ({
  plans: getActivePlans(state)
})

export default connect(
  mapStateToProps
)(PlansContainer)

// <ProductsList title="Products">
//   {products.map(product =>
//     <ProductItem
//       key={product.id}
//       product={product}
//       onAddToCartClicked={() => addToCart(product.id)} />    -> TODO: quando tiver que adicionar actions
//   )}
// </ProductsList>

// ProductsContainer.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   })).isRequired,
//   addToCart: PropTypes.func.isRequired
// }

// const mapStateToProps = state => ({
//   plans: state.plans
// })

// export default connect(
//   mapStateToProps
// )(PlansContainer)