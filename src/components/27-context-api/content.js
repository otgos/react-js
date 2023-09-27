import React, { useContext, useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import StoreContext from "../../store";

const Content = () => {

  const [amount, setAmount] = useState(1)
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState(0)

  const store = useContext(StoreContext);
  const {currencies} = store;

  useEffect(() => {
    const rslt = amount/currencies[currency]
    setResult(rslt.toFixed(2))
  }, [amount, currency])
  
  return (
    <div className="p-5">
      <InputGroup>
        <Form.Control type="number" onChange={(e)=>setAmount(e.target.value)} value={amount}/>
        <Form.Select value={currency} onChange={(e)=>setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </Form.Select>
        <InputGroup.Text id="basic-addon1">Result: {result} ₺ </InputGroup.Text>
      </InputGroup>
    </div>
  );
};

export default Content;
