import { useState, useReducer } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import "./App.css";

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_EXPENSE": {
      return {
        expenses: [payload.expense, ...state.expenses]
      };
    }
    case "REMOVE_EXPENSE": {
      return {
        expenses: state.expenses.filter((expense) => expense.id !== payload.id)
      };
    }
    case "UPDATE_EXPENSE": {
      return {
        expenses: state.expenses.map((expense) =>
          expense.id === payload.expense.id ? payload.expense : expense
        )
      };
    }
    default:
      return state;
  }
};


// Use proper state management for populating the form in the expenseForm component on clicking the edit icon in the Transaction component
function App() {
  const [state, dispatch] = useReducer(reducer, { expenses: [] });
  const [editingExpense, setEditingExpense] = useState(null);

  const addExpense = (expense) => {
    dispatch({ type: "ADD_EXPENSE", payload: { expense } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "REMOVE_EXPENSE", payload: { id } });
  };

  const updateExpense = (expense) => {
    dispatch({ type: "UPDATE_EXPENSE", payload: { expense } });
    setEditingExpense(null); // Clear editing state after updating
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        <ExpenseForm 
          addExpense={addExpense} 
          editingExpense={editingExpense}
          setEditingExpense={setEditingExpense}
          updateExpense={updateExpense}
        />
        <div className="expenseContainer">
          <ExpenseInfo expenses={state.expenses} />
          <ExpenseList
            expenses={state.expenses}
            deleteExpense={deleteExpense}
            setEditingExpense={setEditingExpense} // Pass for editing
          />
        </div>
      </div>
    </>
  );
}


export default App;