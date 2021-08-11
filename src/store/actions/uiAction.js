export const changeRouteTitle = (title) => {
    return (dispatch) => {
        dispatch ({
            type: 'CHANGING_ROUTE_TITLE',
            payload: {title}
        })
    }
}