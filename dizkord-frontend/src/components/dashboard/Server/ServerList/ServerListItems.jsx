import React from "react";
import { Button } from "@mui/material";

const ServerListItem = ({ serverName }) => {
    return (
        <Button
            sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                margin: 0,
                padding: 0,
                minWidth: 0,
                marginTop: '10px',
                backgroundColor: '#36393F',
                color: '#DCDDDE',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                    backgroundColor: '#5865F2',
                    color: 'white',
                    borderRadius: '14px'
                }
            }}
        >
            {serverName.substring(0, 1).toUpperCase() + serverName.substring(1, 2).toLowerCase()}
            
        </Button>
    )
}

export default ServerListItem