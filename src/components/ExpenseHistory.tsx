import React from "react"
import { useAppSelector } from "../hooks"

function ExpenseHistory() {
  const expenses = useAppSelector((state) => state.expense.expenseHistory)

  return (
    <div style={{ width: "100%" }}>
      {expenses.map((expense, i) => (
        <div
          key={i}
          className={
            expense.amount < 0
              ? "shadow-sm p-1 my-2 d-flex bg-danger rounded text-white"
              : "shadow-sm p-1 my-2 d-flex bg-success rounded text-white"
          }>
          <div>{expense.expenseName}</div>
          <div>{expense.amount}</div>
        </div>
      ))}

      {expenses.length === 0 && <div className="p-1 my-2">No Transactions yet</div>}
    </div>
  )
}

export default ExpenseHistory
