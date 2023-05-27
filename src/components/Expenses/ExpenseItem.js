import Cards from "../UI/Cards";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const title = props.item.title;

  return (
    <li>
      <Cards className="expense-item">
        <ExpenseDate date={props.item.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
        </div>
        <div className="expense-item__price">${props.item.amount}</div>
      </Cards>
    </li>
  );
}

export default ExpenseItem;
