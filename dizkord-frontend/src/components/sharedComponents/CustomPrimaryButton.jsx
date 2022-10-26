import React from "react";
import { Button } from "@mui/material";

const CustomPrimaryButton = ({ label, additionalStyles, disabled, onClick }) => {
    return (
        <Button
            variant="contained"
            sx={{
                bgcolor: '#5865F2',
                color: 'white',
                textTransform:'none',
                fontSize: '16px',
                fontWeight: 500,
                width: '100%',
                height: '40px',
            }}
            style={additionalStyles ? additionalStyles : {}}
            disable={disabled}
            onClick={onClick}
            >
            {label}
        </Button>
    )
}

export default CustomPrimaryButton