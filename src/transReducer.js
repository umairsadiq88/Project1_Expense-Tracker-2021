const TransactionReducer = ((state, action) => {
    switch (action.type) {
        case "ADD_TRANSACTION": {
            return [action.payload, ...state]
        }
        case "DELL_TRANSACTION": {
        let newState = state.filter((obj) => {
            return obj.id !== action.payload.id
                })
                return state = newState
        }

        
        default:
            return state;
    }

})

export default TransactionReducer;