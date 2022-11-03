import React from "react";
import { Button, Typography } from "@mui/material";
import Avatar from "../../../sharedComponents/Avatar";
import OnlineIndicator from "./OnlineIndicator";
import { chatTypes, getActions } from "../../../../store/actions/chatActions";
import { connect } from "react-redux";


const FriendsListItem = ({ id, username, isOnline, setChosenChatDetails }) => {

    const handleChooseActiveConversation = () => {
        setChosenChatDetails({ id: id, username: username}, chatTypes.DIRECT)
    }

    return (
        <Button
        onClick={handleChooseActiveConversation}
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

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(FriendsListItem)