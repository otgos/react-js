import React, { useContext } from 'react'
import "./topbar.scss"
import StoreContext from '../../store'

const Topbar = () => {

  const store = useContext(StoreContext); //{counter, setCounter, currencies}
  const {currencies} = store;
  console.log(currencies)
  

  const formatCurrency = (val)=>{
    return (1/currencies[val]).toFixed(2)
  }

  



  return (
    <header className='exchange'>
      <nav>
        <h3>Exchange</h3>
        <div>
          <span>1$: {formatCurrency("USD")} ₺</span>
          <span>1€: {formatCurrency("EUR")} ₺</span>
        </div>
      </nav>
    </header>
  )
}

export default Topbar