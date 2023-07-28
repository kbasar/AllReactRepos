import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses"


function App() {

  const addExpensehandler = expense => {
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
