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
        case 'ADD_NEW_ITEM_TO_PENDING_ORDER':
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
        case 'UPDATE_EXISTING_ITEMS':
            const pendingOrder = state.pendingOrder
            pendingOrder.items =  action.payload.orderItems
            return {
                ...state,
                pendingOrder,
            }
        case 'REMOVE_ITEM_QUANTITY_FROM_CART':
            const pendingOrderState = state.pendingOrder
            pendingOrderState.items = action.payload.orderItems
            return {
                ...state,
                pendingOrderState,
            }
        default:
            return state
    }
}

export default ordersReducer



