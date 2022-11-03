import React, { useState, useEffect } from "react";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import { getActions } from "../../../store/actions/serverActions";
import { connect } from "react-redux";
import { Dialog, 
         DialogActions,
         DialogContent,
         DialogContentText,
         DialogTitle,
         Typography
} from "@mui/material";

const AddServerDialog = ({ userDetails, isDialogOpen, closeDialogHandler, createServer = () => {} }) => {

    const [serverName, setServerName] = useState('')

    const handleCreateServer = () => {
        createServer({
            serverName: serverName,
            owner: userDetails._id
        })
        closeDialogHandler()
    }

    const handleCloseDialog = () => {
        closeDialogHandler()
        setServerName('')
    }

    return (
        <div>
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
                sx={{
                    width: '440px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
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
                        Customize your server
                    </Typography>
                </DialogTitle>
                <DialogContent
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <DialogContentText
                        sx={{
                            fontSize: '15px',
                            display: 'flex',
                            textAlign: 'center',
                            marginTop: '-5px'
                        }}
                    >
                        Give your new server personality with a name. You can always change it later.
                    </DialogContentText>
                    <InputWithLabel 
                        label="SERVER NAME"
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
                </DialogContent>
                <DialogActions
                    sx={{
                        padding: '0 20px 20px'
                    }}
                >
                    <CustomPrimaryButton 
                        onClick={handleCreateServer}
                        label="Create"
                        additionalStyles={{
                            width: '96px',
                            height: '38px',
                            backgroundColor: '#5865F2',
                            fontSize: '14px',
                            fontWeight: 'bold'
                        }}
                    />
                </DialogActions>

            </Dialog>
        </div>
    )
}

const mapStoreStateToProps = ({ auth }) => {
    return {
        ...auth
    }
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(mapStoreStateToProps, mapActionsToProps)(AddServerDialog)