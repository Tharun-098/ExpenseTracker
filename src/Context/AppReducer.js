export default (state,action)=>{
    switch(action.type){
        case 'DELETE':
            const deletedTransactions=state.transactions.filter((transaction)=>transaction.id!==action.payload)
            localStorage.setItem("data",JSON.stringify(deletedTransactions))
            return{
                ...state,
                transactions:deletedTransactions
            }
        case 'ADD':
                const updatedTransactions=[action.payload,...state.transactions]
                localStorage.setItem("data",JSON.stringify(updatedTransactions))
                return{
                    ...state,
                    transactions:updatedTransactions
            }
        case 'SET':
            return {
                ...state,
                transactions:action.payload
            }
        // case 'GET':
        //     return {
        //         ...state,
        //         transactions:action.payload
        //     }
        default:
            return state
    }
}