import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';


const initialTransactions = []

export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({ children }) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc,
                id: Math.random().toString(36).substr(2, 9)
            },
        })
    }
    
    function delTransaction(transObj) {
        dispatch({
            type: "DELL_TRANSACTION",
            payload: transObj
        })
    }
    
   return (
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction,
            delTransaction

        }}>
            {children}
        </TransactionContext.Provider>
    )
};

