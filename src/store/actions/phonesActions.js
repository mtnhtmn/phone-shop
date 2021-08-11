import {firestore} from '../../services/firebaseService'


export const getPhones = () => {
    return (dispatch) => {

        firestore.collection('phones').get().then((data) => {
           const phones = data.docs.map((doc)=> {
                return {...doc.data(),id:doc.id}
            })
            dispatch({
                type: 'GET_PHONES_DATA_SUCCESS',
                payload: {phones}
            })
        })


    }
}
