import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
//JS object destructuring for props
function ExpenseItem5(props) {
    // const expenseDate =new Date(2023, 2, 23);
    // const expenseTitle= "Family Expenses";
    // const expensAmount= 232.49;



  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2> {props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem5;
