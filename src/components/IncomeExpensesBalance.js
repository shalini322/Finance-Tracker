// components/IncomeExpenses.js

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Money formatter function
function moneyFormatter(num) {
  let p = num.toFixed(2).split('.');
  return (
    '₹ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

// Updated component to include income, expense, and balance
export const IncomeExpensesBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1;
  const balance = income - expense;

  return (
    <div className="inc-exp-balance-container">
      <div className="income">
        <h4>Income</h4>
        <p className="money plus">{moneyFormatter(income)}</p>
      </div>
      <div className="expense">
        <h4>Expense</h4>
        <p className="money minus">{moneyFormatter(expense)}</p>
      </div>
      <div className="balance">
        <h4>Balance</h4>
        <p className={`money ${balance >= 0 ? 'plus' : 'minus'}`}>{moneyFormatter(balance)}</p>
      </div>
    </div>
  );
};

export default IncomeExpensesBalance;