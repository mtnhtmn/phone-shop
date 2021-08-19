
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


