import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Country from './country'

const Countries = () => {

    const [countries, setCountries] = useState([])


    const loadData= async ()=>{
       const resp = await axios.get("https://restcountries.com/v3.1/all");
       console.log(resp.data)

       const arr = resp.data.map((item)=> ({
        flag:item.flags.png,
        name: item.name.common,
        population: item.population,
        capital: item.capital?.join("-"),
        currencies: item.currencies ? Object.keys(item.currencies).map(cur=>item.currencies [cur].name).join("-") :""
       }));

       setCountries(arr)

    }


    useEffect(() => {
      
        loadData();
      
    }, [])
    

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Flag</th>
          <th>Country Name</th>
          <th>Population</th>
          <th>Capital</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>

        {
            countries.map((item)=><Country {...item} key={item.name} />)
        }

        
      </tbody>
    </Table>
  )
}

export default Countries