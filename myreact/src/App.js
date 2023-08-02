import React,{useState} from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses"

const DUMMY_EXPENSES =[
  {
    id:'e1',
    title:'paper',
    amount:99.99,
    date: new Date(2023,4,3),
  },
  {
    id:'e2',
    title:'paper2',
    amount:92.99,
    date: new Date(2022,4,11),
  },
  
  {
    id:'e3',
    title:'paper3',
    amount:98.99,
    date: new Date(2021,4,22),
  },
  {
    id:'e4',
    title:'paper3',
    amount:98.99,
    date: new Date(2020,4,22),
  }
  

];

function App() {

  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  
  const addExpensehandler = expense => {
    setExpenses((prevExpenses => {
      return [expense,...prevExpenses]
    }));
    console.log("in App.js");
    console.log(expense);
  }
 
  return (
   <div>
    <NewExpense onAddExpense ={addExpensehandler} />
    <Expenses items ={expenses} />
   </div>
 ); 
}

export default App;
