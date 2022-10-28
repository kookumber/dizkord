import React, { useState } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import Avatar from "../../../sharedComponents/Avatar";
import InviteDecisionButtons from "./InviteDecisionButtons";

const PendingInvititationsListItem = ({ 
        id, 
        username, 
        email,
        acceptFriendInvite = () => {},
        rejectFriendInvite = () => {}    
    }) => {

        const [buttonsDisabled, setButtonsDisabled] = useState(false)
        
        const handleAcceptInvite = () => {
            acceptFriendInvite({ id })
            setButtonsDisabled(true)
        }

        const handleRejectInvite = () => {
            rejectFriendInvite({ id })
            setButtonsDisabled(true)
        }
    
        return (
            <Tooltip title={email}>
                <div style={{
                    width: '100%'
                }}
                className="pending-invites">
                    <Box
                        sx={{
                            width: '100%',
                            height: '50px',
                            marginTop: '5px',
                            marginBottom: '5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            cursor: 'pointer',
                            '&:hover': {
                                backgroundColor: '#4f545c99'
                            }
                        }}
                    >
                        <Avatar username={username}/>
                        <Typography
                            sx={{
                                marginLeft: '7px',
                                fontWeight: '600',
                                color: '#8e9297',
                                flexGrow: 1
                            }}
                        >{username}</Typography>
                        <InviteDecisionButtons 
                            disable={buttonsDisabled}
                            accepteInviteHandler={handleAcceptInvite}
                            rejectInviteHandler={handleRejectInvite}
                        />
                    </Box>
                </div>
            </Tooltip>
        )
}

export default PendingInvititationsListItem