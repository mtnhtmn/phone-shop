import {firestore} from "../../services/firebaseService";
export const getPendingOrder = (userId) => {
    return (dispatch) => {
        firestore.collection('users').doc(userId).collection('orders').where('status','==','pending').get().then((query)=>{
            if(!query.empty) {
                const doc = query.docs[0]
                const pendingOrder = doc.data()
                dispatch({type: 'SET_PENDING_ORDER',payload:{

                    pendingOrder:{
                        ...pendingOrder,id:doc.id
                    }


                    }})
            }
        })
    }
}



