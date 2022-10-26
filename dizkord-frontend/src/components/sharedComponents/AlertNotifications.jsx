import React from "react";
import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import { connect } from "react-redux";

const AlertNotifications = () => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            open
            onClose={() => {}}
        >
            <Alert severity="info">Alert message</Alert>
        </Snackbar>
    )
}

export default AlertNotifications