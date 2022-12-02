import React from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import RedirectInfo from "../../sharedComponents/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { getActions } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const LoginPageFooter = ({ handleLogin, isFormValid, reset, login }) => {

    // We use the useEffect of useNavigate from react to redirect the user to the page we specify
    const navigate = useNavigate()

    const handlePushToRegisterPage = () => {
        navigate('/register')
        reset()
    }

    const handleDemoLogin = () => {
        const userDetails = {
            email: 'demo@gmail.com',
            password: 'password'
        }
        login(userDetails, navigate)
    }

    return (
        <>
        <RedirectInfo 
            text=""
            redirectText={"Sign in with Demo Account."}
            additionalStyles={{ 
                marginTop: '25px', 
                color: '#A3A6AA',
                fontSize: '12px', 
                // lineHeight: '12px'
            }}
            redirectHandler={handleDemoLogin}
        />
        <div>
            <CustomPrimaryButton 
                label="Log in"
                additionalStyles={{ marginTop: '10px', padding: 0 }}
                disable={!isFormValid}
                onClick={handleLogin}
            />

        </div>
        <RedirectInfo 
            text={'Need an account? '}
            redirectText={'Register'}
            additionalStyles={{ marginTop: '5px', color: '#A3A6AA' }}
            redirectHandler={handlePushToRegisterPage}
        />
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(LoginPageFooter)