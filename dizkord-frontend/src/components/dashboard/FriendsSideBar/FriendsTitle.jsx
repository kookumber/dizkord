import React from "react";
import { Typography } from "@mui/material";

const FriendsTitle = ({ title }) => {
    return (
        <Typography
            sx={{
                textTransform: "uppercase",
                color: "#8e9297",
                margin: "10px",
                fontSize: "14px"
            }}
        >
            {title}
        </Typography>
    )
}
export default FriendsTitle