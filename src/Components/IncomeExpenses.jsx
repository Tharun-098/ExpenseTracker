import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const IncomeExpenses = () => {
  const {transactions}=useContext(GlobalContext)
  const amount=transactions.map((transaction)=>transaction.amount)
  const income=amount.filter((amounts)=>amounts>0).reduce((x,y)=>(x=x+y),0).toFixed(2)
  const expense=(amount.filter((amount)=>amount<0).reduce((x,y)=>(x=x+y),0)*-1).toFixed(2)
  return (
    <div className='expense'>
      <div>
        <h2>INCOME</h2>
        <p>{income}</p>
      </div>
      <div>
        <h2>EXPENSE</h2>
        <p>{expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
