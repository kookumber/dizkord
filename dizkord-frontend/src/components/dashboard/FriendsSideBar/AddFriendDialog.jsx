import { Dialog, 
         DialogActions, 
         DialogContent, 
         DialogContentText, 
         DialogTitle,
         Typography} from "@mui/material";
import React, { useState, useEffect } from "react";
import { validateEmail } from "../../../utils/validators";
import CustomPrimaryButton from "../../sharedComponents/CustomPrimaryButton";
import InputWithLabel from "../../sharedComponents/InputWithLabels";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/friendsActions";

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvite = () => {} }) => {

    const [email, setEmail] = useState('');
    const [isFormValid, setIsFormValid] = useState('')

    // Sends friend request to server
    const handleSendInvite = () => {
        sendFriendInvite({
            targetEmailAddress : email
        },
        handleCloseDialog
        )
    }

    const handleCloseDialog = () => {
        closeDialogHandler()
        setEmail('')
    }

    // If email value changes, check if it's correct email
    useEffect(() => {
        setIsFormValid(validateEmail(email))
    }, [email, setIsFormValid])

    return (
        <div>
            <Dialog
                open={isDialogOpen}
                onClose={handleCloseDialog}
            >
                <DialogTitle>
                    <Typography>Add Friend</Typography>        
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can add a friend with their Email.
                    </DialogContentText>    
                    <InputWithLabel 
                        label=""
                        type="text"
                        value={email}
                        setValue={setEmail}
                        placeholder="Enter an Email"
                    />
                </DialogContent> 
                <DialogActions>
                    <CustomPrimaryButton 
                        onClick={handleSendInvite} 
                        label="send"
                        additionalStyles={{
                            marginLeft: '10px',
                            marginRight: '10px',
                            marginBottom: '10px',
                            marginTop: '-5px'
                        }}/>
                </DialogActions>
            </Dialog>
        </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(AddFriendDialog);