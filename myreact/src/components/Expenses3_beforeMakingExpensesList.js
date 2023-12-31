import React, {useState} from 'react';
import Card from "./cards/Card1";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './expense-filter/ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangehandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
 const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
 });

 let expensesContent = <p>No expenses found.</p>;
 if (filteredExpenses.length > 0){
    expensesContent= filteredExpenses.map((expense) => (
    <ExpenseItem 
    key = {expense.id}
    title ={expense.title}
    amount = {expense.amount}
    date = {expense.date}/>
  ))
 }

  return (<>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangehandler}/>
      {expensesContent}
    </Card>
    </>
  );
}

export default Expenses;