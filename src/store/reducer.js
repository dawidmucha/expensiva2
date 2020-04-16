const defaultState = {
    isLoggedIn: false,
    userId: null
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOG_IN_USER':
            return {
                isLoggedIn: true,
                userId: action.userId
            }
        case 'LOG_OUT_USER':
            return {
                isLoggedIn: false,
                userId: null
            }
        default:
            return state
    }
}

export default reducer