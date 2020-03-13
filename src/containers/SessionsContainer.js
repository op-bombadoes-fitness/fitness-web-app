import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { addToCart } from '../actions'
import { getActiveSessions } from '../reducers/sessions'
import SessionsList from '../components/SessionsList'

const SessionsContainer = ({ sessions }) => (
  <SessionsList sessions={sessions} />
)

const mapStateToProps = (state) => ({
  sessions: getActiveSessions(state)
})

export default connect(
  mapStateToProps
)(SessionsContainer)
