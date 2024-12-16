import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpensesBalance } from './components/IncomeExpensesBalance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="main-content">
          <Balance />
          <IncomeExpensesBalance />
          <AddTransaction />
        </div>
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;  