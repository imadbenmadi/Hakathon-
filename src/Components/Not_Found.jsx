import React from 'react'
import { connect } from 'react-redux'

export const Not_Found = (props) => {
  return (
    <div>Not_Found</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Not_Found)