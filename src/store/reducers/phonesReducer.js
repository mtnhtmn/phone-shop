const initialState = {
    phones: []
}

const phonesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PHONES_DATA_SUCCESS':
            return {
                ...state,
                phones: action.payload.phones
            }
        default:
            return state
    }


}

export default phonesReducer