const initialState = {
    title: ''
}

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGING_ROUTE_TITLE':
            return {
                ...state,
                title: action.payload.title
            }
        default:
            return state
    }

}

export default uiReducer