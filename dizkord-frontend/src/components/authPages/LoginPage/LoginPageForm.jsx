import React from "react";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import '../authPages.scss'


const LoginPageForm = ({ email, setEmail, password, setPassword, error }) => {
    
    let emailLabel = ""
    let passwordLabel = ""
    let emailError, passwordError
    if (error) {
        let emailString = error.indexOf("email") > -1 ? error.slice(error.indexOf("email") + 7) : ""
        emailLabel = emailString.length > 0 ? "EMAIL - " + emailString.slice(0, emailString.indexOf(".")) : "EMAIL"
        emailLabel === "EMAIL" ? emailError = false : emailError = true
        
        let passwordString = error.indexOf("password") > -1 ? error.slice(error.indexOf("password") + 10) : ""
        passwordLabel = passwordString.length > 0 ? "PASSWORD - " + passwordString.slice(0, passwordString.indexOf(".")) : "PASSWORD"
        passwordLabel === "PASSWORD" ? passwordError = false : passwordError = true
    } else {
        emailLabel = "EMAIL"
        passwordLabel = "PASSWORD"
    }

    return (
        <>
            <InputWithLabel
                value={email}
                setValue={setEmail}
                label={emailLabel}
                type='text'
                placeholder='Enter e-mail'
                className={emailError ? "error-message" : null}
            />
            
            <InputWithLabel
                value={password}
                setValue={setPassword}
                label={passwordLabel}
                type='password'
                placeholder='Enter your password'
                className={passwordError ? "error-message" : null}
            />
        </>
    )
}

export default LoginPageForm