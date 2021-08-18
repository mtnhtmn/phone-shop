import {currentUser, firestore} from "../../services/firebaseService";

export const getPendingOrder = (userId) => {
    return (dispatch) => {
        firestore.collection('users').doc(userId).collection('orders').where('status', '==', 'pending').get().then((query) => {
            if (!query.empty) {
                const doc = query.docs[0]
                const pendingOrderData = doc.data()
                dispatch({
                    type: 'FETCH_PENDING_ORDER_SUCCESS', payload: {

                        pendingOrder: {...pendingOrderData, id: doc.id}
                    }
                })
            }
        })
    }
}


export const createNewPendingOrder = (phone) => {
    phone.quantity = 1
    return (dispatch) => {
        const user = currentUser()
        const newPendingOrder = {
            items: [phone],
            status: 'pending',
        }
        const newPendingOrderDoc = firestore.collection('users').doc(user.uid).collection('orders').doc()

        newPendingOrderDoc.set(newPendingOrder).then(() => {
            dispatch({
                type: 'CREATE_PENDING_ORDER',
                payload: {
                    pendingOrder: {
                        ...newPendingOrder,
                        id: newPendingOrderDoc.id
                    }
                }
            })
        })
    }
}


export const addItemToPendingOrder = (phone) => {
    return (dispatch, getState) => {


        const pendingOrder = getState().ordersReducer.pendingOrder
        const orderItems = pendingOrder.items
        const orderId = pendingOrder.id
        const user = currentUser()
        const isExistedIndex = orderItems.findIndex(item => item.id === phone.id)
        if (isExistedIndex >= 0) {
            orderItems[isExistedIndex].quantity++
            firestore.collection('users').doc(user.uid).collection('orders').doc(orderId).update({
                items:orderItems
            }).then(()=> {
                dispatch({
                    type: 'UPDATE_ITEMS', payload: {orderItems}
                })

            })

        } else {
            phone.quantity = 1
            firestore.collection('users').doc(user.uid).collection('orders').doc(orderId).update({
                items: [...orderItems, phone]
            }).then(() => {
                dispatch({type: 'ADD_ITEM_TO_PENDING_ORDER', payload: {phone}})
            })

        }

    }
}

