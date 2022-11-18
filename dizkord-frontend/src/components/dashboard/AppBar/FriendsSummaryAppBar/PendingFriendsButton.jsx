import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PendingInvitesButton = () => {

    const navigate = useNavigate()

    const buttonStyle = {
        width: '100%',
        height: '50px',
        marginTop: '5px',
        marginBottom: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
        paddingTop: '15px',
        paddingBottom: '15px',
    }

    const handleRedirect = () => {
        navigate('/conversations/@me')
    }

    return (
        <>
            <Button
                onClick={handleRedirect}
                sx={buttonStyle}
            >
                <Typography
                    style={{
                        marginLeft: '7px',
                        fontWeight: '600',
                        color: "#8e9297",
                    }}
                    variant="subtitle1"
                    align="left"
                >
                    Pending Invites
                </Typography>
            </Button>
        </>
    )
}

export default PendingInvitesButton