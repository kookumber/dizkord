import React from "react";
import { Box, IconButton } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const InviteDecisionButtons = ({ disabled, acceptInviteHandler, rejectInviteHandler }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <IconButton 
                style={{
                    color: 'white',
                }}
                sx={{
                    '&:hover': { fontWeight: 800, backgroundColor: 'black' }
                }}
                disable={disabled}
                onClick={acceptInviteHandler}
            >
                <CheckIcon />
            </IconButton>
            <IconButton
                style={{
                    color: 'white',
                }}
                sx={{
                    '&:hover': { fontWeight: 800, backgroundColor: 'black' }
                }}
                disable={disabled}
                onClick={rejectInviteHandler}
            >
                <ClearIcon sx={{
                    '&:hover': { fontWeight: 800 }
                }} />
            </IconButton>
        </Box>
    )
}

export default InviteDecisionButtons