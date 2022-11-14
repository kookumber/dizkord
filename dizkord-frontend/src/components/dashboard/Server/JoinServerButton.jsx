import React, { useState } from "react";
import { Button } from "@mui/material";
import ExploreIcon from '@mui/icons-material/Explore';
import AddServerDialog from "./AddServerDialog";

const JoinServerButton = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpenAddServerDialog = () => {
        setIsDialogOpen(true)
    }

    const handleCloseAddServerDialog = () => {
        setIsDialogOpen(false)
    }

    return (
        <>
        <Button
            onClick={handleOpenAddServerDialog}
            sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                margin: 0,
                padding: 0,
                minWidth: 0,
                marginTop: '10px',
                backgroundColor: '#36393F',
                color: '#2E8B57',
                '&:hover': {
                    backgroundColor: '#2E8B57',
                    color: 'white',
                    borderRadius: '14px'
                }
            }}
        >
            <ExploreIcon />
        </Button>
        <AddServerDialog
            isDialogOpen={isDialogOpen}
            closeDialogHandler={handleCloseAddServerDialog}
            option="JOIN"
        />
        </>
    )
}

export default JoinServerButton