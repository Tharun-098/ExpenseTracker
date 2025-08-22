import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const AddTransaction = () => {
  const {addTransaction,transactions}=useContext(GlobalContext)
  const [text,setText]=useState("")
  const [amount,setAmount]=useState(0)
  const onSubmit=e=>{
    e.preventDefault()
    const newTransaction={
      id:transactions.length?transactions[transactions.length-1].id+1:1,
      text,
      amount:+amount
    }
    addTransaction(newTransaction)
  }
  return (
    <div className='add'>
        <h3>Add new transactions</h3>
      <form  onSubmit={onSubmit}>
        <div>
            <label htmlFor="text">Text</label>
            <input type="text"  value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text....' />
        </div>
        <div>
            <label htmlFor="amount">Amount<br/>(negative-Expense,positive-Income)</label>
            <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount'/>
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
