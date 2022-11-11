import React, { useState } from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import { getActions } from "../../../store/actions/serverActions";
import { connect } from "react-redux";
import { Dialog, 
         DialogActions,
         DialogContent,
         DialogContentText,
         DialogTitle,
         Typography,
         Button
} from "@mui/material";
import { styled } from "@mui/system";

const AddServerDialog = ({ userDetails, 
                           isDialogOpen, 
                           closeDialogHandler,
                           option,
                           error, 
                           addServerParticipants = () => {},
                           createServer = () => {} }) => {

    const [serverName, setServerName] = useState('')
    
    const handleCreateServer = () => {
        createServer({
            serverName: serverName,
            owner: userDetails._id
        })
        closeDialogHandler()
    }

    const handleJoinServer = () => {
        // Check if using full link or just passing in name/serverId
        if (serverName.indexOf('dizkord') !== -1) {
            let serverDetail = serverName.slice(19)
            addServerParticipants({ serverSearch: serverDetail, userId: userDetails._id })
        } else {
            addServerParticipants({ serverSearch: serverName, userId: userDetails._id })
        }
        closeDialogHandler()
    }

    const handleCloseDialog = () => {
        closeDialogHandler()
        setServerName('')
    }

    const headerText = option === "CREATE" ? "Create your server" : "Join a Server"
    const subText = option === "CREATE" ? 
                    "Give your new server personality with a name. You can always change it later."
                    :
                    "Enter an invite below to join an existing server"
    
    const inputLabelText = option === "CREATE" ? "SERVER NAME" : "INVITE LINK"
    const buttonLabelText = option === "CREATE" ? "Create" : "Join Server"

    const ExampleContainer = styled('div')({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '10px',
    })
    
    const exampleText = option === "CREATE" ? null :
        <ExampleContainer>
            <DialogContentText
                sx={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    color: 'black'
                }}
            >
                INVITES SHOULD LOOK LIKE
            </DialogContentText>
            <DialogContentText sx={{ fontSize: '13px' }}> serverName </DialogContentText>
            <DialogContentText sx={{ fontSize: '13px' }}> https://dizkord.gg/serverName </DialogContentText>
            <DialogContentText sx={{ fontSize: '13px' }}> https://dizkord.gg/serverIdasdasdsa </DialogContentText>

        </ExampleContainer>

    return (
        <div>
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                PaperProps={{
                    sx: {
                        width: '420px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }
                }}
            >
                <DialogTitle
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: 'transparent'
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '26px',
                            color: '#060607',
                            fontWeight: 'bold'
                        }}
                    >
                        { headerText }
                    </Typography>
                </DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        marginTop: '-10px'
                    }}
                >
                    <DialogContentText
                        sx={{
                            fontSize: '14px',
                            display: 'flex',
                            textAlign: 'center',
                            marginTop: '-5px'
                        }}
                    >
                        { subText }
                    </DialogContentText>
                    <InputWithLabel 
                        label={inputLabelText}
                        type="text"
                        value={serverName}
                        setValue={setServerName}
                        additionalStyles={{
                            backgroundColor: '#e3e5e8',
                            border: 'none',
                            color: 'black',
                            '&:focus': {
                                outline: 'none'
                            }
                        }}
                        labelStyles={{
                            fontSize: '13px',
                            fontWeight: 'bold',
                            marginBottom: '8px',
                            marginTop: '15px'
                        }}
                    />
                    { exampleText }
                </DialogContent>
                <DialogActions
                    sx={{
                        padding: '15px 20px 15px',
                        backgroundColor: '#f2f3f5',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}
                >
                    <Button
                        sx={{
                            color: '#747f8d',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            marginLeft: '-15px'
                        }}
                        onClick={handleCloseDialog}
                    >
                        Back
                    </Button>
                    <CustomPrimaryButton 
                        onClick={option === "CREATE" ? handleCreateServer : handleJoinServer}
                        label={buttonLabelText}
                        additionalStyles={{
                            width: '96px',
                            height: '38px',
                            backgroundColor: '#5865F2',
                            fontSize: '11px',
                            fontWeight: 'bold'
                        }}
                    />
                </DialogActions>

            </Dialog>
        </div>
    )
}

const mapStoreStateToProps = ({ auth, usersServers }) => {
    return {
        ...auth,
        ...usersServers
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(AddServerDialog)