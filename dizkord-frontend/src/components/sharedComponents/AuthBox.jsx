import React from "react";
import Box from '@mui/material/Box'
import { styled } from '@mui/system'

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2',
    backgroundImage: 'url(/login-img.png)',
    backgroundSize: 'cover',
})

const AuthBox = (props) => {
    return (
        <>
            <BoxWrapper>
                <Box 
                    className="auth-box"
                    sx={{
                    width: 700,
                    height: 344,
                    bgcolor: '#36393f',
                    borderRadius: '5px',
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: '32px',
                    }}
                    style={props.additionalStyles}
                >
                    {props.children}
                </Box>
                
            </BoxWrapper>
        </>
    )
}

export default AuthBox