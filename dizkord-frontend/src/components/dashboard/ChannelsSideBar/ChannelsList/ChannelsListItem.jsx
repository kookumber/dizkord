import React from "react";
import { Button, Typography } from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';


const ChannelsListItem = ({ channelName, id }) => {
    return (
        <Button
            sx={{
                width: '100%',
                height: '30px',
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
                lineHeight: '20px',
                verticalAlign: 'middle',
                '&:hover': {
                    backgroundColor: '#4f545c99'
                }
            }}
        >
            <TagIcon
                sx={{
                    color: "#8e9297",
                    fontSize: '22px',
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }}
            />
            <Typography
                style={{
                    marginLeft: '5px',
                    fontWeight: '600',
                    color: "#8e9297",
                    fontSize: '15px',
                    textTransform: 'none'
                }}
                variant="subtitle1"
                align="left"
            >
                {channelName.toLowerCase().split(" ").join("-")}
            </Typography>
        </Button>
    )
}

export default ChannelsListItem