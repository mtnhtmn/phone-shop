const initialState = {
    items: [],
    cartNumbers: 0,
    totalAmount: 0,
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                cartNumbers: state.cartNumbers + 1
            }
        default:
            return state
    }
}

export default cartReducer