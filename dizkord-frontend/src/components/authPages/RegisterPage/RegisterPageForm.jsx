import React from "react";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import '../authPages.scss'

export const RegisterPageForm = ({ email, setEmail, 
                                   password, setPassword, 
                                   username, setUsername, 
                                   error }) => {

    let emailLabel = ""
    let usernameLabel = ""
    let passwordLabel = ""
    let emailError, usernameError, passwordError

    if (error) {
        if (error === "Email already in use.") {
            emailLabel = "EMAIL - Email is already registered"
        } else {
            let emailString = error.indexOf("email") > -1 ? error.slice(error.indexOf("email")+7) : ""
            emailLabel = emailString.length > 0 ? "EMAIL - " + emailString.slice(0, emailString.indexOf(".")) : "EMAIL"
            emailLabel === "EMAIL" ? emailError = false : emailError = true
        }

        let usernameString = error.indexOf("username") > -1 ? error.slice(error.indexOf("username") + 10) : ""
        usernameLabel = usernameString.length > 0 ? "USERNAME - " + usernameString.slice(0, usernameString.indexOf(".")) : "USERNAME"
        usernameLabel === "USERNAME" ? usernameError = false : usernameError = true

        let passwordString = error.indexOf("password") > -1 ? error.slice(error.indexOf("password") + 10) : ""
        passwordLabel = passwordString.length > 0 ? "PASSWORD - " + passwordString.slice(0, passwordString.indexOf(".")) : "PASSWORD"
        passwordLabel === "PASSWORD" ? passwordError = false : passwordError = true

    } else {
        emailLabel = "EMAIL"
        usernameLabel = "USERNAME"
        passwordLabel = "PASSWORD"
    }

    const labelStyles = { 
        fontFamily: 'Noto Sans', 
        fontWeight: 'bold', 
        color: '#B9BBBE', 
        fontSize: '12px',
        width: '95%',
        marginBottom: '7px',
        minWidth: '405px'
    }

    const additionalStyles = { 
        border: 'none', 
        fontSize: '12px', 
        fontFamily: 'Noto Sans',
        width: '95%'
    }
    

    return (
        <>
            <InputWithLabel 
                value={email} 
                setValue={setEmail} 
                label={emailLabel} 
                type="text" 
                className={emailError ? "error-message" : null}
                labelStyles={labelStyles}
                additionalStyles={additionalStyles}
                />
            <InputWithLabel 
                value={username} 
                setValue={setUsername} 
                label={usernameLabel} 
                type="text" 
                className={usernameError ? "error-message" : null} 
                labelStyles={labelStyles}
                additionalStyles={additionalStyles}
                />
            <InputWithLabel 
                value={password} 
                setValue={setPassword} 
                label={passwordLabel} 
                type="password" 
                className={passwordError ? "error-message" : null} 
                labelStyles={labelStyles}
                additionalStyles={additionalStyles}
                />
        </>
    )
}