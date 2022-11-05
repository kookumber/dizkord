import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddChannelDialog from "./AddChannelDialog";


const AddChannelButton = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleOpenAddServerDialog = () => {
        setIsDialogOpen(true)
    }

    const handleCloseAddServerDialog = () => {
        setIsDialogOpen(false)
    }

    return (
        <div
            style={{
                marginRight: '8x'
            }}
        >
            <Button
                className="add-channel-button"
                onClick={handleOpenAddServerDialog}
                sx={{
                    margin: 0,
                    padding: 0,
                    borderRadius: '50%',
                    minWidth: '0px',
                    lineHeight: '16px'
                }}
            >
                <AddIcon
                    sx={{
                        color: '#8e9297',
                        fontSize: '22px',
                        '&:hover': {
                            color: 'white'
                        }
                    }}
                />
            </Button>
            <AddChannelDialog
                isDialogOpen={isDialogOpen}
                closeDialogHandler={handleCloseAddServerDialog}
            />
        </div>
    )
}

export default AddChannelButton



