import React, { useState } from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import { connect } from "react-redux";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Button
} from "@mui/material";

const AddChannelDialog = ({ userDetails, isDialogOpen, closeDialogHandler, createChannel = () => {} }) => {

    const [channelName, setChannelName] = useState('')

    const handleCloseDialog = () => {
        closeDialogHandler()
        setChannelName('')
    }
    return (
        <>
            <Dialog
                className="add-channel-dialog"
                open={isDialogOpen}
                onClose={handleCloseDialog}
                // sx={{
                //     width: '500px',
                //     paddingLeft: '15px',
                //     paddingRight: '15px',
                //     marginLeft: 'auto',
                //     marginRight: 'auto',
                //     overflow: 'none',
                    
                // }}
                PaperProps={{
                    sx: {
                        width: '440px',
                        borderRadius: '20px 20px 20px 20px',
                        backgroundColor: '#36393f',
                        overflow: 'hidden'
                    }
                }}
            >
            
                <DialogTitle
                    sx={{
                        width: '96%',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        padding: 0,
                        paddingTop: '15px',
                        // alignItems: 'center',
                        marginLeft: '22px',
                        background: 'transparent',
                        backgroundColor: '#36393f',
                        flexDirection: 'column',
                        borderRadius: '20px 20px 0px 0px',
                        marginBottom: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '24px',
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    >
                        Create Channel
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '13px',
                            color: 'white'
                        }}
                    >
                        in Text Channels
                    </Typography>
                </DialogTitle>
                <DialogContent
                    sx={{
                        backgroundColor: '#36393f',
                    }}
                >
                    <InputWithLabel 
                        label="CHANNEL NAME"
                        type="text"
                        value={channelName}
                        setValue={setChannelName}
                        placeholder="# new-channel"
                        additionalStyles={{
                            backgroundColor: '#e3e5e8',
                            padding: 0,
                            border: 'none',
                            color: 'white',
                            '&:focus': {
                                outline: 'none'
                            },
                            width: '99%',
                            backgroundColor: '#202225',
                            paddingLeft: '15px',
                        }}
                        labelStyles={{
                            fontSize: '14px',
                            fontWeight: 'bold',
                            marginBottom: '8px',
                            marginTop: '15px',
                            color: '#DCDDDE',
                            padding: 0,
                            
                        }}
                    />
                </DialogContent>
                <DialogActions
                    sx={{
                        backgroundColor: '#36393f',
                        height: '40px',
                        borderRadius: '0px 0px 20px 20px',
                        marginBottom: '15px'
                    }}
                >
                    <Button
                        sx={{
                            color: 'white',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            marginRight: '15px'
                        }}
                        onClick={handleCloseDialog}
                    >
                        Cancel
                    </Button>
                    <CustomPrimaryButton
                        label="Create Channel"
                        additionalStyles={{
                            width: '122px',
                            height: '38px',
                            backgroundColor: '#5865F2',
                            fontSize: '13px',
                            fontWeight: 'bold',
                            marginRight: '12px',
                            padding: 0,
                            lineHeight: '13px'
                        }}
                    />
                </DialogActions>
            </Dialog>
        </>
    )
}

export default AddChannelDialog