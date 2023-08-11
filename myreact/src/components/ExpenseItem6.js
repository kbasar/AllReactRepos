import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import './cards/Card.css';
import Card1 from '../cards/Card1';

    // const expensAmount= 232.49;

function ExpenseItem6(props){

  return (
    <Card1 className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2> {props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card1>
  );
}
export default ExpenseItem6;
