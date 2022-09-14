import ExpenseItem from "../ExpenseItem/ExpenseItem";

import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
      <div className="expenses-title-wrapper">
        <span className="expenses-title">Expenses</span>
      </div>
      <ExpenseItem title={props.items[0].title}
                   amount={props.items[0].amount}
                   date={props.items[0].date}
      />
    </div>
  );
}

export default Expenses;
