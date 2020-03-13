import React from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { addToCart } from '../actions'
// import { getVisibleProducts } from '../reducers/products'
// import ProductItem from '../components/ProductItem'

import Plan from '../components/Plan'

const PlansList = ({ plans }) => {
    const hasPlans = plans.length > 0
    const plansRender = hasPlans ? (
        plans.map((plan, key) =>
            <Plan name={plan.name} muscles={plan.exercises} id={plan.id} key={key} />
        )
    ) : (
            <div className="container-fluid">
                <div className="row"></div>
                <div className="alert alert-primary" role="alert">Ainda não tens um plano de treino!</div>
                <button className="btn btn-primary" type="submit">Criar plano de treino</button>
            </div>
        )

    if (hasPlans) {
        return (
            <div className="container-fluid">
                <h4 className="mb-3">Os teus planos de treino</h4>
                <div className="row">
                    <div className="col-md-4 mb-2" >
                        {plansRender}
                    </div>
                </div>
                <button type="button" className="btn btn-primary btn-block">Ver todos os planos</button>
            </div>
        )
    }
    else {
        return (
            <div>
                {plansRender}
            </div>
        )
    }
}

// Cart.propTypes = {
//     products: PropTypes.array,
//     total: PropTypes.string,
//     onCheckoutClicked: PropTypes.func
//   }

export default PlansList