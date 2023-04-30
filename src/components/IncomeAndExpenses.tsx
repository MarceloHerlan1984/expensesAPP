import { Stack } from "react-bootstrap"
import { useAppSelector } from "../hooks"

function IncomeAndExpenses() {
  const income = useAppSelector((state) => {
    state.expense.income
  })
  console.log(income)
  const expense = useAppSelector((state) => {
    state.expense.expense
  })
  return (
    <div className="card shadow px-1 py-3 mt-3">
      <Stack>
        <div>Income</div>
        <span>$ </span>
        <div>Expense</div>
        <span>$</span>
      </Stack>
    </div>
  )
}

export default IncomeAndExpenses
