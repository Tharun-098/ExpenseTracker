import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const Balance = () => {
  const {transactions}=useContext(GlobalContext)
  console.log(transactions)
  const amounts=transactions.map(transaction=>transaction.amount)
  console.log(amounts)
  const total=amounts.reduce((x,y)=>(x+=y),0).toFixed(2)
  console.log(total)
  return (
    <div className='Balance'>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}

export default Balance
