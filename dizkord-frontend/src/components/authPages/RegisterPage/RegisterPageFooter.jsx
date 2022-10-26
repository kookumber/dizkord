import React from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import RedirectInfo from "../../sharedComponents/RedirectInfo";
import { useNavigate } from "react-router-dom";

const RegisterPageFooter = ({ handleRegister }) => {

    const navigate = useNavigate()

    const handlePushToLoginPage = () => {
        navigate('/login')
    }

    return (
        <>
            <CustomPrimaryButton 
                label='Continue'
                additionalStyles={{ marginTop: '30px', padding: 0, height: '45px' }}
                onClick={handleRegister}
            />
            <RedirectInfo
                text={""}
                redirectText={'Already have an account?'}
                additionalStyles={{ marginTop: '5px' }}
                redirectHandler={handlePushToLoginPage}
            />
        </>
    )
}

export default RegisterPageFooter