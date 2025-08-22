import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import TransactionList from './TransactionList'

const Transaction = () => {
  const {transactions} = useContext(GlobalContext)
  console.log(transactions)
  return (
    <div className='Transactions'>
      <div>
        <h3>History</h3>
        <ul>
           {transactions.map(transaction => (<TransactionList key={transaction.id} transaction={transaction}/>))
          } 
        </ul>
      </div>
    </div>
  )
}

export default Transaction
