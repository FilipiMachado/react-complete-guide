import { useState } from "react";

import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card"

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState(props.title)

  const clickHandler = () => {
    setNewTitle('New Title')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{newTitle}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* <input type="text"
             id="new-title"
             name="new-title"
             onChange={clickHandler}
             value={newTitle}/> */}
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
