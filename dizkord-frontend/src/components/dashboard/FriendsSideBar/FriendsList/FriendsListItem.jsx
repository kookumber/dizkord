import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../sharedComponents/Avatar";
import OnlineIndicator from "./OnlineIndicator";

const FriendsListItem = ({ id, username, isOnline }) => {
    return (
        <Button
            style={{
                width: '100%',
                height: '50px',
                marginTop: '5px',
                marginBottom: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                textTransform: 'none',
                color: 'black',
                position: 'relative',
                paddingTop: '15px',
                paddingBottom: '15px',
                marginLeft: '-7px'
            }}
            sx={{
                '&:hover': {
                    backgroundColor: '#4f545c99'
                }
                }}
            className="friends-list-item"
        >
            <Avatar username={username}/>
            <Typography
                style={{
                    marginLeft: '7px',
                    fontWeight: '600',
                    color: "#8e9297",
                }}
                variant="subtitle1"
                align="left"
            >
                {username}
            </Typography>
            <OnlineIndicator isOnline={isOnline} />
        </Button>
    )
}

export default FriendsListItem