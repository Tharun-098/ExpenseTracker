import { createContext, useEffect, useReducer } from "react";
import AppReducer from '../Context/AppReducer'
const initialState = {
    transactions: []
}
export const GlobalContext = createContext(initialState)
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: "ADD",
            payload: transaction
        })
    }
    useEffect(() => {
        const store = localStorage.getItem('data')
        dispatch({
            type: 'SET',
            payload: JSON.parse(store)
        })
    }, [])
    // useEffect(() => {
    //     const stores = localStorage.setItem('data',JSON.stringify(initialState.transactions))
    //     dispatch({
    //         type: 'GET',
    //         payload: stores
    //     })
    // }, [])
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}