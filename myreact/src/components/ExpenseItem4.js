import './ExpenseItem.css'

//JS object destructuring for props
function ExpenseItem4({expense}) {
    // const expenseDate =new Date(2023, 2, 23);
    // const expenseTitle= "Family Expenses";
    // const expensAmount= 232.49;
const month =expense.date.toLocaleString('en-US',{month:'long'});
const day =expense.date.toLocaleString('en-US',{day:'2-digit'});
const year =expense.date.getFullYear();


  return (
    <div className='expense-item'>
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2> {expense.title}</h2>
        <div className='expense-item__price'>{expense.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem4;
