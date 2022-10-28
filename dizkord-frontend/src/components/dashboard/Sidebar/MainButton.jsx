import React from "react";
import { Button } from "@mui/material";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import './sidebar.scss'


const MainButton = () => {
    return (
        <Button
            className="sidebar-button"
            sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                maring: 0,
                padding: 0,
                minWidth: 0,
                marginTop: '10px',
                color: 'white',
                backgroundColor: '#5865F2'
            }}
                >
            <SportsEsportsIcon style={{ fontSize: '32px'}}/>
        </Button>
    )
}

export default MainButton