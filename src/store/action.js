const logInUser = (userId) => {
    return {
        type: 'LOG_IN_USER',
        userId
    }
}

const logOutUser = () => {
    return {
        type: 'LOG_OUT_USER'
    }
}

export { logInUser, logOutUser }