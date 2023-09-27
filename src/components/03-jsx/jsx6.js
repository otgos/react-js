import React from 'react'
import countries from "./countries.json"

const Jsx6 = () => {
  return (
    
    <table>
        <thead>
            <tr>
                <th>Order</th>
                <th>Country Name</th>
                <th>Country Code</th>
            </tr>
        </thead>
        <tbody>

            {
                countries.map((c, i)=> 
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{c.name}</td>
                    <td>{c.code}</td>
                </tr>)
            }

            
        </tbody>
    </table>
    
  )
}

export default Jsx6