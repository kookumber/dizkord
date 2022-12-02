import React from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import RedirectInfo from "../../sharedComponents/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

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
            <Typography
                sx={{
                    marginTop: '25px',
                    fontSize: '12px',
                    color: '#A3A6AA'
                }}
            >
                By registering, you agree to Dizkord's Terms of Service and Privacy Policy.
            </Typography>
        </>
    )
}

export default RegisterPageFooter