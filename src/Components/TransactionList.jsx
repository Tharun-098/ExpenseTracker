import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const TransactionList = ({transaction}) => {
    const {deleteTransaction}=useContext(GlobalContext)
    return (
        <li>
            {transaction.text}<span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)}>X</button>
        </li>
    )
}

export default TransactionList
