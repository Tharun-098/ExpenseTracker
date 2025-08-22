import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpenses from './Components/IncomeExpenses'
import Transaction from './Components/Transaction'
import AddTransaction from './Components/AddTransaction'
import { GlobalContext, GlobalProvider } from './Context/GlobalState'


const App = () => {
   const {transactions}=useContext(GlobalContext)
   console.log(transactions)
  localStorage.setItem('data',JSON.stringify(transactions))
  
  return (
    <div className='app'>
      <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <Transaction/>
      <AddTransaction/>
      </GlobalProvider>
    </div>
  )
}

export default App

