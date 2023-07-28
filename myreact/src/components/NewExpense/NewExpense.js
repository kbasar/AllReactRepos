import React from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense =(props)=>{

 const onSaveExpenseDatahandler = (enteredExpenseDate) =>  {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString();
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
 } ;

return (<div className='new-expense'>
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
</div>)
};

export default NewExpense;