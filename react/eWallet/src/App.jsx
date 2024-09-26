import { useEffect, useRef, useState } from "react"
import Swal from "sweetalert2";

export default function App() {
  const balanceInput = useRef();
  // Component States
  const [balance, setBalance] = useState();
  const [transactions, setTransactions] = useState([]);
  // Conponent Actions
  const deposit = () => {
    let amount = balanceInput.current.value;
    let oBalance = balance ? balance : 0;
    let trasnObj = {
      beforeBalance: oBalance,
      amount: amount,
      afterBalance: oBalance + +amount,
      type: "deposit"
    }
    let oTrans = [...transactions];
    oTrans.push(trasnObj);
    setBalance(oBalance + +amount);
    setTransactions(oTrans)
  }
  const withdraw = () => {
    let amount = balanceInput.current.value;
    if (amount <= balance) {
      let trasnObj = {
        beforeBalance: balance,
        amount: amount,
        afterBalance: balance - +amount,
        type: "withdraw"
      }
      let oTrans = [...transactions];
      oTrans.push(trasnObj);
      setBalance(balance - +amount);
      setTransactions(oTrans)
    }
    else {
      Swal.fire({
        icon: "error",
        text: "No Sufficent Fund",
        timer: 2000,
      })
    }
  }
  const reverse = (index) => {
    let obj = transactions[index];
    let oTrans = [...transactions];
    oTrans.splice(index, 1);
    setTransactions(oTrans);
    setBalance(obj.beforeBalance)
  }
  useEffect(() => {
    if (balance || balance == 0) {
      // Has Value
      localStorage.setItem("balance", balance);
      localStorage.setItem("tras", JSON.stringify(transactions))
    } else {
      // Undefind
      let bal = +localStorage.getItem("balance");
      let tran = JSON.parse(localStorage.getItem("tras")) || [];
      setBalance(bal);
      setTransactions(tran);
    }
  }, [balance]);
  return (
    <div className="col-12 bg-dark text-white p-3">
      <div className="col-12 container">
        <div className="col-12 d-flex flex-column">
          <h1>Welcome To My E-Wallet</h1>
          <p>Your Balance is  {balance} EGP</p>
        </div>
        <div className="col-12 d-flex gap-3">
          <input ref={balanceInput} className="form-control" placeholder="Enter Amount" />
          <button onClick={withdraw} className="btn btn-danger" disabled={balance == 0 ? true : false}>Withdraw</button>
          <button onClick={deposit} className="btn btn-success">Deposit</button>
        </div>
        <h1 className="col-12">Your Transactions</h1>
        <table className="table table-dark table-bordered text-center" >
          <thead>
            <tr>
              <th>-</th>
              <th>Before Balance</th>
              <th>Trasaction Amount</th>
              <th>Trasaction Type</th>
              <th>After Balance</th>
              <th>Reverse</th>
            </tr>
          </thead>
          <tbody>
            {
              transactions.map((el, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <th>{el.beforeBalance}</th>
                    <th>{el.amount}</th>
                    <th><p className={`m-0 text-center p-2 rounded bg-${el.type == "deposit" ? 'primary' : 'danger'}`}>{el.type}</p></th>
                    <th>{el.afterBalance}</th>
                    <th>
                      {
                        transactions.length - 1 == index ? <button className="btn btn-danger" onClick={() => { reverse(index) }}>Reverse</button> : null
                      }
                    </th>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>

    </div>
  )
}
