import React, { useState } from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import { getActions } from "../../../store/actions/serverActions";
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
import { styled } from "@mui/system";

const Separator = styled('div')({
    border: '1px solid #2f3136',
    marginBottom: '15px'
})

const InviteToServerDialog = ({ userDetails,
    currentServer,
    isDialogOpen,
    closeDialogHandler
}) => {

    const [serverName, setServerName] = useState('')

    const handleCloseDialog = () => {
        closeDialogHandler()
        setServerName('')
    }

    const handleInvite = () => {

    }

    return (
        <>
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                PaperProps={{
                    sx: {
                        width: '420px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        borderRadius: '8px',
                        backgroundColor: '#36393f',
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '18px',
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                    >
                        {`Invite friends to ${currentServer.serverName}`}
                    </Typography>
                </DialogTitle>
                <DialogContent sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        marginTop: '-10px'
                    }}
                >
                    <DialogContentText
                        sx={{
                            fontSize: '15px',
                            display: 'flex',
                            alignItems: 'flex-start',
                            marginTop: '-5px',
                            color: '#B9BBBE'
                        }}
                    >
                        # general
                    </DialogContentText>
                    <InputWithLabel
                        label=""
                        type="text"
                        value={serverName}
                        setValue={setServerName}
                        placeholder="Search for friends"
                        additionalStyles={{
                            backgroundColor: '#202225',
                            border: 'none',
                            color: '#B9BBBE',
                            height: '32px',
                            '&:focus': {
                                outline: 'none'
                            },
                            fontSize: '14px',
                            marginTop: '-20px'
                        }}
                    />
                    
                </DialogContent>
                <Separator />
                <DialogContent
                    sx={{
                        display: 'flex',
                        color: '#B9BBBE',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden'
                    }}
                >
                    <DialogContentText
                        sx={{
                            color: '#B9BBBE',
                            fontSize: '12px',
                            width: '100%',
                            marginBottom: '5px',
                            fontWeight: 'bold'
                        }}
                    >
                        OR, SEND A SERVER INVITE LINK TO A FRIEND
                    </DialogContentText>
                    <DialogContentText
                        sx={{
                            height: '32px',
                            backgroundColor: '#202225',
                            color: '#B9BBBE',
                            borderRadius: '4px',
                            paddingLeft: '6px',
                            width: '100%',
                            fontSize: '14px',
                            lineHeight: '14px',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        {`https://dizkord.gg/${currentServer._id}`}
                    </DialogContentText>
                </DialogContent>

            </Dialog>
        </>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        ...state.usersServers
    }
}

export default connect(mapStoreStateToProps)(InviteToServerDialog)