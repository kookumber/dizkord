import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const RedirectText = styled('span')({
    color: '#00AFF4',
    fontWeight: 500,
    cursor: 'pointer',
    fontSize: '14px'
})

const RedirectInfo = ({ text, redirectText, additionalStyles, redirectHandler }) => {
    return (
        <div>
            <Typography 
                sx={{ color: '#72767D'}} 
                style={additionalStyles ? additionalStyles : {}}
                variant="subtitle2"
            >
                {text}
                <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
            </Typography>
        </div>
    )
}

export default RedirectInfo