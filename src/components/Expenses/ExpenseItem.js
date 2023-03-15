import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const handleDeleteExpense = () => {
    setTitle('updated');
  };

  const handleAmountChange = () => {
    setAmount(100);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <button className='expense-item__delete-btn' onClick={handleDeleteExpense}>Delete Expense</button>
        <button className='expense-item__change-btn' onClick={handleAmountChange}>Change Amount</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
