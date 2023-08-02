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
  return expense.date.getFullYear().toString() ===filteredYear;
 });

  return (<>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangehandler}/>
      {filteredExpenses.length === 0 ? <p> No expenses Found</p>:props.items.map((expense) => (
        <ExpenseItem 
        key = {expense.id}
        title ={expense.title}
        amount = {expense.amount}
        date = {expense.date}/>
      ))}
     
    </Card>
    </>
  );
}

export default Expenses;