export const validateLoginForm = ({ email, password }) => {
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)

    return isEmailValid && isPasswordValid
}


export const validateRegisterForm = ({email, username, password }) => {
    const isEmailValid = validateEmail(email)
    const isPasswordValid = validatePassword(password)
    const isUsernameValid = validateUsername(username)

    return isEmailValid && isPasswordValid && isUsernameValid
}

const validatePassword = (password) => {
    return password.length >= 6 && password.length <= 15;
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validateUsername = (username) => {
    return username.length >= 3 && username.length <= 15
}