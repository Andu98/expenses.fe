import React from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

const App = () => {
  return(
   <div style={{width: '60%', margin:'auto', marginTop:'40px'}}>
      <h3 style={{ marginBottom:'40px'}}> New Expenses</h3>
      <ExpenseForm/>
   <h3 style={{ marginBottom:'40px'}}> Your Expenses</h3>
   <ExpenseList/>
   </div>
  );
}

export default App;
