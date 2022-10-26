import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { validateRegisterForm } from "../../../utils/validators";
import AuthBox from "../../sharedComponents/AuthBox";
import RegisterPageFooter from "./RegisterPageFooter";
import { RegisterPageForm } from "./RegisterPageForm";
import { useNavigate } from 'react-router-dom';
import { getActions } from "../../../store/actions/authActions";
import { connect } from "react-redux";
import '../authPages.scss'


const RegisterPage = ({ register, error }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isFormValid, setIsFormValid] = useState('false')

    useEffect(() => {
        setIsFormValid(validateRegisterForm({ email, username, password }))
    }, [email, username, password, setIsFormValid])

    const handleRegister = () => {
        const userDetails = {
            email,
            username,
            password
        }

        register(userDetails, navigate)
    }

    return (
        <AuthBox additionalStyles={{ height: '560px', width: '480px' }}>
            <Typography variant='h5' sx={{ color: 'white' }}>
                Create an Account
            </Typography>
            <RegisterPageForm 
                email={email}
                setEmail={setEmail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                error={error}
                />
            <RegisterPageFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid} />
        </AuthBox>
    )
}


const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

const mapStoreStateToProps = (state) => {
    return {
        ...state.auth,
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(RegisterPage)