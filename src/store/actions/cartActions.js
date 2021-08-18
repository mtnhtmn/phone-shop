import {currentUser, firestore} from "../../services/firebaseService";
import {addItemToPendingOrder, createNewPendingOrder} from "./ordersActions";

export const addToCart = (phone) => {
    return (dispatch, getState) => {
        const ordersReducer = getState().ordersReducer
        const pendingOrderId = ordersReducer.pendingOrder.id
        if (pendingOrderId) {
          dispatch(addItemToPendingOrder(phone))
        } else {
           dispatch(createNewPendingOrder(phone))
        }
    }
}

export const removeItemFromCart = (phone) => {
    return (dispatch, getState) => {
        const ordersReducer = getState().ordersReducer
        const pendingOrderId = ordersReducer.pendingOrder.id
        const user = currentUser()

        firestore.collection('users').doc(user.uid).collection('orders').doc(pendingOrderId).delete()
            .then(() => {
                dispatch({
                    type: 'REMOVE_ITEM_FROM_CART',
                    payload: {phone}})
        })
    }
}

