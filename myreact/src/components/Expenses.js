import React from 'react';


import Card from '../card/Card1';
import './Expenses.css';
import ExpenseItem6 from './ExpenseItem6';

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem6
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem6
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem6
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem6
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;