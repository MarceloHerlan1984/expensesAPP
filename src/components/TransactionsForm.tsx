import { useAppDispatch } from "../hooks"
import { useState } from "react"
import { IExpense, addExpenseToHistory, calculateBalance, calculateExpense, calculateIncome } from "./../redux/features/expenseSlice"
import { Form, Button } from "react-bootstrap"

function TransactionsForm() {
  const dispatch = useAppDispatch()

  const [expense, setExpense] = useState<IExpense>({ expenseName: "", amount: "" })
  const onChange = <K extends keyof IExpense>(key: K, value: IExpense[K]) => {
    setExpense({ ...expense, [key]: value })
  }

  return (
    <div className="mt-3">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Transaction</Form.Label>
        <Form.Control
          onChange={(e) => onChange(e.target.name as keyof IExpense, e.target.value)}
          name="expenseName"
          placeholder="Description"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          name="amount"
          placeholder="Enter Amount"
          onChange={(e) => onChange(e.target.name as keyof IExpense, e.target.value)}
        />
      </Form.Group>
      <Button
        onClick={() => {
          dispatch(addExpenseToHistory(expense))
          dispatch(calculateBalance())
          dispatch(calculateIncome())
          dispatch(calculateExpense ())
        }}>
        Add Transaction
      </Button>
    </div>
  )
}

export default TransactionsForm
