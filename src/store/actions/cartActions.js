export const addToCart = (id) => {
    return (dispatch, getState) => {
        console.log('Adding to cart')
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: id,
        })
    }
}

