import './ExpenseItem.css'

//JS object destructuring for props
function ExpenseItem2({date,title,amount}) {
    // const expenseDate =new Date(2023, 2, 23);
    // const expenseTitle= "Family Expenses";
    // const expensAmount= 232.49;
  return (
    <div className='expense-item'>
      <div>{date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2> {title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem2;
