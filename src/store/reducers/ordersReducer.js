const initialState = {
    pendingOrder: {
        items:[]
    },
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PENDING_ORDER':
            return {
                ...state,
                pendingOrder: action.payload.pendingOrder
            }
        default:
            return state
    }
}

export default ordersReducer