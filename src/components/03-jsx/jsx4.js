import React from 'react'

const Jsx4 = () => {

    const age = 20;

  return (
    <div>
        {
            age >=18 && <h3>Eligible for a license</h3>
        }
        {
            age >=18 || <h3>Not ligible for a license</h3>
        }
    </div>
  )
}

export default Jsx4