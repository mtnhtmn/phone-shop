import {currentUser, firestore} from "../../services/firebaseService";

export const addToCart = (phone) => {
    return (dispatch, getState) => {
        delete phone.id
        const ordersReducer = getState().ordersReducer
        const cartReducer = getState().cartReducer
        const pendingOrderId = ordersReducer.pendingOrder.id
        const cartItems = cartReducer.cartItems
        const pendingOrderItems = ordersReducer.pendingOrder.items
        const user = currentUser()

        if (pendingOrderId) {
            firestore.collection('users').doc(user.uid).collection('orders').doc(pendingOrderId).update({
                items:[...cartItems,...pendingOrderItems,phone]
            }).then(() => {
                dispatch({
                    type: 'ADD_ITEM_TO_CART',
                    payload: {phone},
                })
            })
        } else {
            const pendingOrder = {
                items: [phone],
                status:'pending'
            }
            const pendingOrderDoc = firestore.collection('users').doc(user.uid).collection('orders').doc()
            pendingOrderDoc.set(pendingOrder).then(() => {})
            dispatch({type:'SET_PENDING_ORDER',payload:{
                    pendingOrder:{
                        ...pendingOrder,
                        id:pendingOrderDoc.id
                    }
                }})
        }
    }
}

export const removeItemFromCart = (phone) => {
    return (dispatch, getState) => {
        const ordersReducer = getState().ordersReducer
        const cartReducer = getState().cartReducer
        const pendingOrderId = ordersReducer.pendingOrder.id
        const cartItems = cartReducer.cartItems
        const pendingOrderItems = ordersReducer.pendingOrder.items
        const user = currentUser()

        firestore.collection('users').doc(user.uid).collection('orders').doc(pendingOrderId).delete({
            items: [...cartItems, ...pendingOrderItems, phone]
        })
            .then(() => {
                dispatch({
                    type: 'REMOVE_ITEM_FROM_CART',
                    payload: {phone}})
        })
    }
}

