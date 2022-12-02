import React from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import RedirectInfo from "../../sharedComponents/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { getActions } from "../../../store/actions/authActions";
import { connect } from "react-redux";

const LoginPageFooter = ({ handleLogin, isFormValid, reset }) => {

    // We use the useEffect of useNavigate from react to redirect the user to the page we specify
    const navigate = useNavigate()

    const handlePushToRegisterPage = () => {
        navigate('/register')
        reset()
    }

    return (
        <>
        <div>
            <CustomPrimaryButton 
                label="Log in"
                additionalStyles={{ marginTop: '30px', padding: 0 }}
                disable={!isFormValid}
                onClick={handleLogin}
            />

        </div>
        <RedirectInfo 
            text={'Need an account? '}
            redirectText={'Register'}
            additionalStyles={{ marginTop: '5px', color: '#A3A6AA' }}
            redirectHandler={handlePushToRegisterPage}/>
        </>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null, mapActionsToProps)(LoginPageFooter)