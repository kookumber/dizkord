import React from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import RedirectInfo from "../../sharedComponents/RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Typography, Box } from "@mui/material";

const RegisterPageFooter = ({ handleRegister, login }) => {

    const navigate = useNavigate()

    const handlePushToLoginPage = () => {
        navigate('/login')
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
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Typography
                sx={{
                    marginTop: '25px',
                    fontSize: '12px',
                    color: '#A3A6AA',
                    width: '405px'
                }}
            >
                Don't want to register or have an account? Login with Demo Account.
            </Typography>
            <CustomPrimaryButton
                label='Demo Login'
                    additionalStyles={{ marginTop: '5px', height: '45px', width: '405px', backgroundColor: '#23272A' }}
                onClick={handleDemoLogin}
            />
            <CustomPrimaryButton 
                label='Continue'
                    additionalStyles={{ marginTop: '25px', height: '45px', width: '405px' }}
                onClick={handleRegister}
            />
            <RedirectInfo
                text={""}
                redirectText={'Already have an account?'}
                additionalStyles={{ marginTop: '5px', width: '405px' }}
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
            </Box>
            
        </>
    )
}

export default RegisterPageFooter