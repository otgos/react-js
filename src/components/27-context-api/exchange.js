import React, { useContext } from 'react'
import StoreContext from '../../store'
import Topbar from './topbar';
import Content from './content';

const Exchange = () => {
  const store = useContext(StoreContext);
  return (


    <div>
      <Topbar/>
      <Content/>
    </div>
  )
}

export default Exchange