import { useEffect, useRef, useState } from "react"

export default function App() {
  // E-Wallet
  // useRef
  const enterInput = useRef();
  const [balance, setBalance] = useState(1000);
  const [logs, setLogs] = useState([]);

  const addLog = (logType) => {
    let logValue = +enterInput.current.value;
    let afterBalance = logType == "deposit" ? balance + logValue : balance - logValue;
    let obj = {
      beforeBalance: balance,
      log_type: logType,
      log_value: logValue,
      afterBalance: afterBalance,
    }
    let oLogs = [...logs];
    oLogs.push(obj);
    setLogs(oLogs)
  }

  const deposit = () => {
    addLog("deposit");
    setBalance(balance + Number(enterInput.current.value))
  }

  const withdraw = () => {

    let val = Number(enterInput.current.value);
    if (val <= balance) {
      addLog("withdraw");
      setBalance(balance - Number(enterInput.current.value))
    }
    else {
      alert("You are exceed the limit");
    }
  }

  return (
    <div className='App col-12 d-flex flex-wrap'>
      <div className="col-12 d-flex flex-wrap">
        <h1 className="col-12">You Balance is : {balance}</h1>
        <input ref={enterInput} type="number" placeholder="Enter value" />
        <button className="btn btn-success" onClick={deposit}>Deposit</button>
        <button className="btn btn-danger" onClick={withdraw}>Withdraw</button>
      </div>
      <table className="col-12 table table-bordered">
        <thead>
          <tr>
            <th>log-id</th>
            <th>Before Balance </th>
            <th>log type</th>
            <th>log value</th>
            <th>After Balance</th>
          </tr>
        </thead>
        <tbody>
          {
            logs.map((el, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <th>{el.beforeBalance} </th>
                  <th>{el.log_type}</th>
                  <th>{el.log_value}</th>
                  <th>{el.afterBalance}</th>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div >
  )
}