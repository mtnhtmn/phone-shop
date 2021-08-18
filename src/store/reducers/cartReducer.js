const initialState = {
    cartItems: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload.phone]
            }
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: [...state.cartItems,action.payload.phone]
            }
        default:
            return state
    }
}

export default cartReducer