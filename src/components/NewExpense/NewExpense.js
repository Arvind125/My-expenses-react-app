import "./NewExpense.css";
import "./ExpenseForm";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const addingNewExpenseHandler = () => {
    setShowForm(true);
  };

  /*
  ======================= if else method ====
  if (showForm) {
    return (
      <div className="new-expense">
        <ExpenseForm
          addExpenseDataHandler={props.addExpenseDataHandler}
          setShowForm={setShowForm}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={addingNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }
  */
  return (
    <div className="new-expense">
      {!showForm && (
        <button onClick={addingNewExpenseHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          addExpenseDataHandler={props.addExpenseDataHandler}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
