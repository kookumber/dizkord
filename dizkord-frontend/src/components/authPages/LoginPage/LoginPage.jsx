import React, { useState, useEffect } from "react";
import AuthBox from "../../sharedComponents/AuthBox";
import Box from '@mui/material/Box'
import LoginPageHeader from "./LoginPageHeader";
import LoginPageForm from "./LoginPageForm";
import LoginPageFooter from "./LoginPageFooter";
import { validateLoginForm } from "../../../utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/authActions";
import { useNavigate } from 'react-router-dom'
import '../authPages.css'
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

const QRImage = styled('img')({
    width: '176px',
    height: '176px',
    borderRadius: '4px'
})

// The login prop is pulled from getActions in authActions page
const LoginPage = ({ login, error }) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState(''); // Set to empty string by default
    const [password, setPassword] = useState('');

    const [isFormValid, setIsFormValid] = useState('false')
    
    // useeffect logic executed if any dependencies change
    useEffect(() => {
        setIsFormValid(validateLoginForm({ email, password }))
    }, [email, password, setIsFormValid])

    // Gets called whenever Login button in Footer component is clicked
    const handleLogin = () => {
        const userDetails = {
            email, 
            password
        }
        // We call the login action and pass in the object we create plus navigation function
        // This is the action we create in authActions
        login(userDetails, navigate)
    }

    return (
        <AuthBox>
            <Box
                sx={{
                    width: '414px'
                }}
            >
                <LoginPageHeader />
                <LoginPageForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}

                />
                <LoginPageFooter 
                    isFormValid={isFormValid}
                    handleLogin={handleLogin}
                />
            </Box>
            <Box
                sx={{
                    width: '240px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <QRImage src="/github_qr_code.png" />
                <Typography
                    variant="h5"
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        fontFamily: 'Helvetica Neue',
                        marginTop: '15px'
                    }}
                >
                    Visit my Github Repo
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{
                        color: '#B9BBBE',
                        textAlign: 'center',
                        fontSize: '16px',
                        fontFamily: 'Helvetica Neue',
                        marginTop: '10px'
                    }}
                >
                    Scan this with your phone to visit my Github Repo
                </Typography>
            </Box>
            
        </AuthBox>
    )
}

// Using mapActionsToProps, we can set as props the actions from the authActions files
// which is getActions, which we return an object with login and register actions
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



// React-redux lets us dispatch action to authActions
export default connect(mapStoreStateToProps, mapActionsToProps)(LoginPage)