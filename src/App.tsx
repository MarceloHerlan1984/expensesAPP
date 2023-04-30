import { useState } from "react"
import { Container } from "react-bootstrap"
import Balance from "./components/Balance"
import IncomeAndExpenses from "./components/IncomeAndExpenses"
import ExpenseHistory from "./components/ExpenseHistory"
import TransactionsForm from "./components/TransactionsForm"

function App() {
  return (
    <Container className="d-flex flex-column align-items-center mt-5 card shadow rounded" style={{ maxWidth: "500px" }}>
      <Balance />
      <IncomeAndExpenses />
      <ExpenseHistory />
      <TransactionsForm />
    </Container>
  )
}

export default App
