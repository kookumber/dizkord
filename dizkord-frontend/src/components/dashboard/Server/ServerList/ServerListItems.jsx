import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getActions } from "../../../../store/actions/serverActions";


const ServerListItem = ({ 
            serverName, 
            serverId, 
            owner,
            serversChannels,
            setCurrentServerDetails }) => {

    const navigate = useNavigate()
    
    const handleClickRedirect = () => {
        setCurrentServerDetails({
            serverName: serverName,
            serverId: serverId,
            owner: owner,
            channels: serversChannels
        })
        navigate(`/channels/${serversChannels[0]._id}`)
    }

    return (
        <Button
            onClick={handleClickRedirect}
            className="server-button"
            sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                margin: 0,
                padding: 0,
                minWidth: 0,
                marginTop: '10px',
                backgroundColor: '#36393F',
                color: '#DCDDDE',
                fontWeight: 'bold',
                textTransform: 'none',
                fontSize: '16px',
                '&:hover': {
                    backgroundColor: '#5865F2',
                    color: 'white',
                    borderRadius: '14px'
                }
            }}
        >
            {serverName.substring(0, 1).toUpperCase() + serverName.substring(1, 2).toLowerCase()}
            
        </Button>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)(ServerListItem)