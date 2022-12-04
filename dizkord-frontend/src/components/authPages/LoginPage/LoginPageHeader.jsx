import React from "react";
import { Typography } from "@mui/material";
import '../authPages.css'

const LoginPageHeader = () => {
    return (
        <div className="login-header">
            <Typography variant="h4" sx={{color: "white", fontWeight: 800, fontFamily: 'Noto sans', fontSize: '24px'}}>
                Welcome Back!
            </Typography>
            <Typography variant="h5" sx={{ color: "#b9bbbe", fontSize: '16px', fontFamily: 'Noto sans', marginTop: '10px' }}>
                We're so excited to see you again!
            </Typography>
        </div>
    )
}

export default LoginPageHeader