import React, { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";

import data from "./countries.json";

const FilterCountry = () => {
  const [countries, setCountries] = useState(data);

  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    
    const arr = data.filter((item)=> item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
    setCountries(arr)
  }, [searchText])
  

  

  return (
    <Container className="mt-5">
        <Form.Control
        type="text"
        placeholder="enter country name"
        className="mb-3"

        onChange={(e)=>setSearchText(e.target.value)}

        />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Country Code</th>
            <th>Country Name</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={country.code}>
              <td>{index + 1}</td>
              <td>{country.name}</td>
              <td>{country.code}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default FilterCountry;
