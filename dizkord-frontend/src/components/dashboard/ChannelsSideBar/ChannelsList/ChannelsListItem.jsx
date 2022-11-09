import React from "react";
import { Button, Typography } from "@mui/material";
import TagIcon from '@mui/icons-material/Tag';
import { useNavigate } from 'react-router-dom'
import { connect } from "react-redux";
import { chatTypes, getActions } from "../../../../store/actions/chatActions";
import { getActions as channelActions } from "../../../../store/actions/channelActions";

const ChannelsListItem = ({ channelName, id, setChosenChatDetails, setCurrentChannel }) => {

    const navigate = useNavigate()

    const handleClick = () => {
        // Need to set chosen chat details
        setChosenChatDetails({ id: id, channelName: channelName}, chatTypes.GROUP);
        
        setCurrentChannel({
            _id: id,
            channelName: channelName
        })
        navigate(`/channels/${id}`)
    }

    return (
        <Button
            onClick={handleClick}
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

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
        ...channelActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(ChannelsListItem)