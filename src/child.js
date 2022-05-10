import React, { useContext, useState } from 'react';
import './App.css';
import { TransactionContext } from './transContext';

const Child = () => {
  let { transaction, addTransaction, delTransaction} = useContext(TransactionContext);
  // console.log(transaction)

const [amount, setAmount] = useState(0);
const [desc, setDesc] = useState("");

const submithandle = (event) => {
    event.preventDefault();
    if (Number(amount) === 0) {
      alert("Please enter correct value");
      return false;
  }
  addTransaction({
    amount: Number(amount),
    desc: desc
});
setDesc('');
setAmount(0)
 }

  const delButton = (id) => {
    delTransaction({ id })
  }


  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
        if (transaction[i].amount > 0)
            income = income + transaction[i].amount
    }
    return income;
}


const getExpense = () => {
  let expense = 0;
  for (var i = 0; i < transaction.length; i++) {
      if (transaction[i].amount < 0)
          expense += transaction[i].amount
  }
  return expense;
}

  return (
    <div>
      <h1>Expense Tracker</h1>
      <h3>Your Balance <br /> ${getIncome() + getExpense()}</h3>

      <div className="inc-exp-container">
        <h3 className="money plus">INCOME <br /> ${getIncome()}</h3>
        <h3 className="money minus">EXPENSE <br /> ${getExpense()}</h3>
      </div>

             <h3>History</h3>
       <ul className="list">
          {transaction.map((transObj, ind) => {
            return (<li key={ind}>
              <span> {transObj.desc}</span>
              <span> ${transObj.amount}</span>
              <button  onClick={() => delButton(transObj.id)}>Del </button>
            </li>
            )
          })}

        </ul>
      
      <h3>Add new transaction</h3>
      <form onSubmit={submithandle}>
        <div className="form-control">
          <label> Enter Description
            <input type="text" 
            placeholder="Description" 
            required 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} >
            </input>
          </label>
        </div>
        <div className="form-control">
          <label>
            Amount <br />
            (negative - expense, positive - income)</label>

          <input type="number" 
          placeholder="Enter Your Amount" 
          required value={amount} 
          onChange={(e) => setAmount(e.target.value)}></input>
        </div>
        <div className="form-control">

          <button className="btn">Add transaction</button>

        </div>
      </form>
    </div>
  );
}

export default Child;
