import React, {useState} from 'react';
import Card from "../components/cards/Card1";
import './Expenses.css';
import ExpensesFilter from './expense-filter/ExpenseFilter';
import ExpensesList from "../components/expenseslist/ExpensesList"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangehandler = selectedYear =>{
    setFilteredYear(selectedYear);
  }
 const filteredExpenses = props.items.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear;
 });



  return (
    <li>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangehandler}/>
     <ExpensesList items = {filteredExpenses}/>
    </Card>
    </li>
  
  );
}

export default Expenses;