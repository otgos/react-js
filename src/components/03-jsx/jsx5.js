import React from 'react'

const Jsx5 = () => {

    const countries = ["Germany", "Kazakhstan", "Turkey", "France", "China"]
    const cities = ["Berlin", "Almaty", "Istanbul", "Paris", "Beijing"]

  return (
    <div>
        <ul>
            {
                countries.map((country, index)=><li key={index}>{country}</li>)
            }           
        </ul>

        <select name="" id="">

            {
                cities.map((city, index)=><option key={index} value="">{city}</option>)
            }

    
        </select>
    </div>
  )
}

export default Jsx5