import './ExpenseItem.css'

//JS object destructuring for props
function ExpenseItem3({expense}) {
    // const expenseDate =new Date(2023, 2, 23);
    // const expenseTitle= "Family Expenses";
    // const expensAmount= 232.49;
  return (
    <div className='expense-item'>
      <div>{expense.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2> {expense.title}</h2>
        <div className='expense-item__price'>{expense.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem3;
