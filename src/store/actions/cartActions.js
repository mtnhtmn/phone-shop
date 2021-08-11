import {currentUser, firestore, arrayUnion} from "../../services/firebaseService";

export const addToCart = (phone) => {
    return (dispatch, getState) => {
        const ordersReducer = getState().ordersReducer
        const pendingOrderId = ordersReducer.pendingOrder.id
        const user = currentUser()

        if (pendingOrderId) {
            firestore.collection('users').doc(user.uid).collection('orders').doc(pendingOrderId).update({
                items: arrayUnion(phone)
            }).then(() => {
                dispatch({
                    type: 'ADD_ITEM_TO_CART',
                    payload: {phone},
                })
            })

        } else {

            const pendingOrderDoc = firestore.collection('users').doc(user.uid).collection('orders').doc()

            const pendingOrder = {
                items: [phone],
                status:'pending'
            }

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

