import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { styled } from "@mui/system";
import AddServerDialog from "./AddServerDialog";

const Separator = styled('div')({
    width: '50%',
    backgroundColor: '#4F545C7A',
    height: '3px',
    position: 'relative',
    marginTop: '10px'
})


const AddServerButton = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpenAddServerDialog = () => {
        setIsDialogOpen(true)
    }

    const handleCloseAddServerDialog = () => {
        setIsDialogOpen(false)
    }

    return (
        <>
            <Separator />
            <Button
                className='add-server-button'
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
                <AddIcon
                    sx={{
                        fontSize: '34px'
                    }}
                />
            </Button>
            <AddServerDialog 
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseAddServerDialog}
            />
        </>
    )

}

export default AddServerButton