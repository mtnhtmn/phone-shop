const initialState = {
    pendingOrder: {
        items:[]
    },
}

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PENDING_ORDER':
            return {
                ...state,
                pendingOrder: action.payload.pendingOrder
            }
        case 'ADD_ITEM_TO_PENDING_ORDER':
            return {
                ...state,
                pendingOrder: {
                    ...state.pendingOrder,
                    items: [...state.pendingOrder.items, action.payload.phone]
                }
            }
        case 'FETCH_PENDING_ORDER_SUCCESS':
            return {
                ...state,
                pendingOrder: action.payload.pendingOrder
            }
        case 'UPDATE_ITEMS':
            const pendingOrder = state.pendingOrder
            pendingOrder.items =  action.payload.orderItems
            return {
                ...state,
                pendingOrder,
            }

        default:
            return state
    }
}

export default ordersReducer



