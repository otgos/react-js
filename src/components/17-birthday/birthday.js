import React, { useState } from 'react';
import data from "./people.json";
import { Button, Container } from 'react-bootstrap';
import Person from './person';

const Birthday = () => {

    const [people, setPeople] = useState(data);
    
    //console.log(people)

    const deletePerson = (id)=>{
        const arr = people.filter((item)=>item.id !==id)
        setPeople(arr)
    }

  return (
    <Container>
        <h1>People Born Today</h1>
        <p>There are {people.length} people born today.  </p>

        {
            people.map((item)=><Person {...item} deletePerson = {deletePerson} key={item.id}/>)
        }

        <Button variant='danger' className='mt-4' onClick={()=>setPeople([])}>Clear All</Button>
        <Button variant='success' className='mt-4' onClick={()=>setPeople(data)}>Load Data</Button>
    </Container>
  )
}

export default Birthday