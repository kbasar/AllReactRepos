import FormToGoogleSheet from "./components/forms/FormToGoogleSheet";
import "./App.css";
import ExpenseItem3 from "./components/ExpenseItem3";
import ExpenseItem2 from "./components/ExpenseItem2";
import ExpenseItem from "./components/ExpenseItem";
import ExcerciseComponent from "./components/ExerciseComponent";
import ExpenseItem4 from "./components/ExpenseItem4";
import ExpenseItem5 from "./components/ExpenseItem5";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Paper",
      amount: 4.12,
      date: new Date(2020, 7, 12),
    },
    {
      id: "e2",
      title: "Pen",
      amount: 194.12,
      date: new Date(2020, 7, 13),
    },
    {
      id: "e3",
      title: "Ink",
      amount: 294.12,
      date: new Date(2020, 7, 15),
    },
    {
      id: "e4",
      title: "Pencil",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e5",
      title: "Box",
      amount: 934.12,
      date: new Date(2020, 7, 17),
    },
    {
      id: "e6",
      title: "Calender",
      amount: 34.12,
      date: new Date(2020, 7, 17),
    },
  ];
  return (
    <div>
      <ExpenseItem 
             date={expenses[0].date}
             title={expenses[0].title}
             amount={expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem 
             date={expenses[1].date}
             title={expenses[1].title}
             amount={expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem2
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      ></ExpenseItem2>
       <ExpenseItem3
        expense={expenses[3]}
      ></ExpenseItem3>
      <ExpenseItem4
        expense={expenses[4]}
      ></ExpenseItem4>
      <ExpenseItem5 expense={expenses[5]}/>
      <ExcerciseComponent></ExcerciseComponent>
      <FormToGoogleSheet></FormToGoogleSheet>
    </div>
  );
}

export default App;
