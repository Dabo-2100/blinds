import { useRef } from "react";
import { useState } from "react"

export default function App() {
  const [balance, setBalance] = useState(1000);
  const newValue = useRef();

  const deposit = () => {
    setBalance(balance + +newValue.current.value);
    newValue.current.value = "";
  }
  const withdraw = () => {
    if (balance >= +newValue.current.value) {
      setBalance(balance - +newValue.current.value);
    }
    else {
      alert('Balance is Low');
    }
    newValue.current.value = "";
  }
  return (
    <div className="App">
      <h1>The Balance is : {balance} EGP</h1>
      <input ref={newValue} />
      <button className="btn btn-success" onClick={deposit}>deposit 1000</button>
      <button className="btn btn-danger" onClick={withdraw}>withdraw 1000</button>
    </div>
  )
}
