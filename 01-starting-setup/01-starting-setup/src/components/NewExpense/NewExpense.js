import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addingNewExpense, setAddingNewExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const addingNewExpenseHandler = () => {
    setAddingNewExpense(!addingNewExpense);
  };

  return (
    <div className="new-expense">
      {!addingNewExpense && (
        <button onClick={addingNewExpenseHandler}>Add New Expense</button>
      )}
      {addingNewExpense && (
        <ExpenseForm
          onCancel={addingNewExpenseHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
