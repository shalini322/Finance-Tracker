import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const transactionAmount = parseFloat(amount);
    if (!text || isNaN(transactionAmount)) {
      alert('Please provide both text and a valid amount');
      return;
    }

    // Create new transaction with today's date in a consistent format
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: transactionAmount,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter where you've spent or earned"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
