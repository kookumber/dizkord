import React from "react";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box } from "@mui/material";
import FiberManualRecordOutlinedIcon from '@mui/icons-material/FiberManualRecordOutlined';

const OnlineIndicator = ({ isOnline }) => {
    
    return (
        <Box
            sx={{
                color: isOnline ? '#3ba55d' : '#99aab5',
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                right: '5px',
            }}
        >
            {isOnline ? <FiberManualRecordIcon /> : <FiberManualRecordOutlinedIcon />}
        </Box>
    )
}

export default OnlineIndicator