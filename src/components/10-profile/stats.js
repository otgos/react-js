import React from 'react'

const Stats = ({name, value}) => {
  return (
    <div>
        <h3>{value}</h3>
        <h6> {name} </h6>
    </div>
  )
}

export default Stats