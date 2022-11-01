import { Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import OnlineIndicator from "../FriendsSideBar/FriendsList/OnlineIndicator";

const ChosenOptionLabel = ({ username }) => {
    return (
        <>
        <div>
            <Typography
                sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}
            >
                {`${ username ? username : ''}`}
            </Typography>
            {/* <OnlineIndicator /> */}
        </div>
        </>
    )
}

const mapStoreStateToProps = (state) => {
    return {
        username: state.chat.chosenChatDetails?.username
    }
}

export default connect(mapStoreStateToProps)(ChosenOptionLabel)